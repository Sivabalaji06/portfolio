"use client";
export default function DataProjects() {
  const projects = [
    {
      title: "Sales & Revenue Analytics System",
      description:
        "Analyzed sales datasets using SQL and Python to uncover revenue trends, top-performing products, and customer behavior. Built dashboards and business insights.",
      image: "/projects/sales-analytics.png",
      github: "https://github.com/Sivabalaji06/sales-revenue-analytics"
    },
    {
      title: "Customer Behavior Segmentation (ML)",
      description:
        "Applied K-Means clustering to segment customers based on spending, order frequency, and recency. Visualized clusters and behavioral insights for targeted marketing.",
      image: "/projects/customer-segmentation.png",
      github: "https://github.com/Sivabalaji06/customer-segmentation-ml"
    },
    {
      title: "Global Trends Insights Report",
      description:
        "Performed regression modeling and statistical analysis on global indicators such as population, GDP, and CO₂. Generated heatmaps and regression visualizations.",
      image: "/projects/global-trends.png",
      github: "https://github.com/Sivabalaji06/global-trends-insights"
    }
  ];

  return (
    <section id="data-projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Data Analytics & ML Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
