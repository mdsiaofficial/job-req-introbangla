import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <h2 style={{ color: "crimson", fontSize:"36px", border:"1px solid green", padding:"40px 130px", display:"flex", gap:"60px" }}>User Profile for User ID: {id}</h2>
    </div>
  )
  
}