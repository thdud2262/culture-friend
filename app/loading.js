import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor:'#eee',
      }}
    >
      <p 
        style={{ 
          fontSize:'100px', 
          color:'white', 
          fontWeight:'700'
        }}> 
        loading
      </p>
      <CircularProgress />
    </div>
  );
}
