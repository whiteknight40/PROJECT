import Navbar from "../components/Navbar";
import GlobalControls from "../components/GlobalControls";
import CourseSection from "../components/CourseSection";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
}
const dummyData = [
  { branch: "Computer Science", cgpa: 8.0 },
  { branch: "Mechanical", cgpa: 7.5 },
];
