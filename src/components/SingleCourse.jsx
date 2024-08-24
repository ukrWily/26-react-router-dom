import { useParams } from "react-router-dom";
import courses from "../data/courses";

function SingleCourse() {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);

  return (
    <>
      <h1>Single Course Info</h1>
      <h2>{course.title}</h2>
      <h2>{course.slug}</h2>
      <h2>{course.id}</h2>
    </>
  );
}

export default SingleCourse;
