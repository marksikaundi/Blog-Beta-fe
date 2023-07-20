import React from "react";

const FeaturesPage = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Feature 2",
      description: "Praesent vel velit vel ex consequat tristique a eu odio.",
    },
    {
      title: "Feature 3",
      description:
        "Fusce nec sapien quis lorem vestibulum auctor eu nec tortor.",
    },
    {
      title: "Feature 4",
      description:
        "Donec rhoncus justo id dui imperdiet, sit amet viverra felis dapibus.",
    },
  ];

  return (
    <div>
      <h1>Welcome to FeaturesPage</h1>
      <div>
        {features.map((feature, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
