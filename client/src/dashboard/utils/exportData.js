import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";
import { saveAs } from "file-saver";
import { Document, Paragraph } from "docx";

export const exportDataToExcel = (data, filename) => {
  // Create a new workbook
  const workbook = XLSXUtils.book_new();
    
  // Convert data to worksheet
  const worksheet = XLSXUtils.json_to_sheet(data);
  
  // Add the worksheet to the workbook
  XLSXUtils.book_append_sheet(workbook, worksheet, "Sheet 1");
  
  // Generate Excel file
  const excelBuffer = XLSXWrite(workbook, { type: "array", bookType: "xlsx" });
  
  // Create a Blob from the Excel buffer
  const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
  // Download the file
  saveAs(blob, `${filename}.xlsx`);
};

export const exportDataToWord = (data, filename) => {
    // Create a new document
    const doc = new Document();
  
    // Create a table for the data
    const table = doc.createTable(data.length + 1, Object.keys(data[0]).length);
  
    // Set the table headers
    const headerRow = table.getRow(0);
    Object.keys(data[0]).forEach((key, index) => {
      headerRow.getCell(index).addContent(new Paragraph(key));
    });
  
    // Set the table data
    data.forEach((item, rowIndex) => {
      const row = table.getRow(rowIndex + 1);
      Object.values(item).forEach((value, columnIndex) => {
        row.getCell(columnIndex).addContent(new Paragraph(value.toString()));
      });
    });
  
    // Generate Word file
    const buffer = doc.save();
  
    // Create a Blob from the Word buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
  
    // Download the file
    saveAs(blob, `${filename}.docx`);
  };
  