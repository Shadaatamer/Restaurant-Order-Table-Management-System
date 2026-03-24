const Order = require("../models/orderModel");
const Menu = require("../models/menuModel");
const Table = require("../models/tableModel");
const catchAsync = require("../utils/catchAsync");

exports.createOrder = catchAsync(async (req, res) => {
  const { items, table } = req.body;

  const foundTable = await Table.findById(table);

  if (!foundTable) {
    return res.status(404).json({
      status: "fail",
      message: "Table not found",
    });
  }

  if (!foundTable.isAvailable) {
    return res.status(400).json({
      status: "fail",
      message: "Table is not available",
    });
  }

  let totalPrice = 0;

  for (const item of items) {
    const menuItem = await Menu.findById(item.menuItem);

    if (!menuItem) {
      return res.status(404).json({
        status: "fail",
        message: `Menu item not found: ${item.menuItem}`,
      });
    }

    totalPrice += menuItem.price * item.quantity;
  }

  const newOrder = await Order.create({
    items,
    table,
    totalPrice,
  });

  await Table.findByIdAndUpdate(table, { isAvailable: false });

  res.status(201).json({
    status: "success",
    data: newOrder,
  });
});

exports.getAllOrders = catchAsync(async (req, res) => {
  const orders = await Order.find()
    .populate("table")
    .populate("items.menuItem");

  res.status(200).json({
    status: "success",
    data: orders,
  });
});

exports.completeOrder = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      status: "fail",
      message: "Order not found",
    });
  }

  order.status = "completed";
  await order.save();

  await Table.findByIdAndUpdate(order.table, { isAvailable: true });

  res.status(200).json({
    status: "success",
    data: order,
  });
});
