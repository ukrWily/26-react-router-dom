import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";
import NotFound from "./NotFound";
import { useEffect } from "react";

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h2>{course?.id}</h2>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
