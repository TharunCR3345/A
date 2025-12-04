export async function POST(request) {
  try {
    const body = await request.json();
    const { name, course, requirement, email } = body;

    // Validate required fields
    if (!name || !course || !requirement || !email) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      name,
      course,
      requirement,
      email,
      timestamp: new Date().toISOString(),
    });

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For now, we'll just return success
    return Response.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process contact form" },
      { status: 500 },
    );
  }
}
