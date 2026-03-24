const Table = require("../models/tableModel");
const catchAsync = require("../utils/catchAsync");

exports.createTable = catchAsync(async (req, res) => {
  const newTable = await Table.create(req.body);

  res.status(201).json({
    status: "success",
    data: newTable,
  });
});

exports.getAllTables = catchAsync(async (req, res) => {
  const tables = await Table.find();

  res.status(200).json({
    status: "success",
    data: tables,
  });
});

exports.updateTableAvailability = catchAsync(async (req, res) => {
  const table = await Table.findByIdAndUpdate(
    req.params.id,
    { isAvailable: req.body.isAvailable },
    { new: true, runValidators: true },
  );

  if (!table) {
    return res.status(404).json({
      status: "fail",
      message: "Table not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: table,
  });
});
