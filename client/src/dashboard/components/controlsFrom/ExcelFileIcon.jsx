import { IconButton } from "@mui/material";
import { InsertDriveFileOutlined } from "@mui/icons-material";

const ExcelFileIcon = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <InsertDriveFileOutlined /> {/* Excel icon */}
    </IconButton>
  );
};

export default ExcelFileIcon;
