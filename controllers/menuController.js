const Menu = require("../models/menuModel");
const catchAsync = require("../utils/catchAsync");

exports.createMenuItem = catchAsync(async (req, res) => {
  const newItem = await Menu.create(req.body);

  res.status(201).json({
    status: "success",
    data: newItem,
  });
});

exports.getAllMenuItems = catchAsync(async (req, res) => {
  const items = await Menu.find();

  res.status(200).json({
    status: "success",
    data: items,
  });
});

exports.getMenuItem = catchAsync(async (req, res) => {
  const item = await Menu.findById(req.params.id);

  if (!item) {
    return res.status(404).json({
      status: "fail",
      message: "Menu item not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});
