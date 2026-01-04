import { courses } from "@/data/courses";
import CourseContent from "./CourseContent";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return {
            title: "Course Not Found | Novox Edtech",
        };
    }

    return {
        title: `${course.title} Course | Novox Edtech`,
        description: `Enroll in our ${course.title} course at Novox Edtech. ${course.description} Get AI-powered mentorship, ${course.duration} of intensive training, and placement support.`,
        openGraph: {
            title: `${course.title} | AI-Driven Software Academy`,
            description: course.longDescription.substring(0, 160) + "...",
            type: "article",
            images: ["/novox-logo.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: `${course.title} Training at Novox`,
            description: `Master ${course.title} with Kerala's top mentors. ${course.outcome} career path.`,
        }
    };
}

export default async function CoursePage({ params }) {
    const { id } = await params;

    return <CourseContent id={id} />;
}
