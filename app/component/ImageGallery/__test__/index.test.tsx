import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageGallery from "../index";

describe("Image gallery component test", () => {
  const images = [
    {
      index: 1,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90a-8bc0-4d0d-9bd4-407b5a8cf1f7.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90a-8bc0-4d0d-9bd4-407b5a8cf1f7.png",
    },
    {
      index: 3,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90a-d16a-4832-ac74-58c4a1b7d051.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90a-d16a-4832-ac74-58c4a1b7d051.png",
    },
    {
      index: 7,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90a-7230-4c91-8890-8e175140e126.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90a-7230-4c91-8890-8e175140e126.png",
    },
    {
      index: 4,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90b-810d-42b7-98da-2de58f8e1354.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90b-810d-42b7-98da-2de58f8e1354.png",
    },
    {
      index: 2,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90c-5450-42e0-84e1-b01ea94e0c06.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90c-5450-42e0-84e1-b01ea94e0c06.png",
    },
    {
      index: 5,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e90c-0d94-4900-a408-5c99c1dae9fe.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e90c-0d94-4900-a408-5c99c1dae9fe.png",
    },
    {
      index: 6,
      thumbnail_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/thumb/98c1e911-47da-421f-b3fc-987c1cd6b9a8.png",
      url_link:
        "https://secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/https%3A//secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com/pms/4380/url/98c1e911-47da-421f-b3fc-987c1cd6b9a8.png",
    },
  ];
  const propKey = "url_link";

  it("changes images correctly when clicking the next button", () => {
    const { getByAltText, getByText } = render(
      <ImageGallery images={images} propKey={propKey} />
    );

    const nextButton = getByText(/→/i);
    fireEvent.click(nextButton);

    const currentImage = getByAltText(/Image 2/i);
    expect(currentImage).toBeInTheDocument();
  });

  it("changes images correctly when clicking the previous button", () => {
    const { getByAltText, getByText } = render(
      <ImageGallery images={images} propKey={propKey} />
    );

    // Move to the second image first
    const nextButton = getByText(/→/i);
    fireEvent.click(nextButton);

    // Click the previous button to move back to the first image
    const prevButton = getByText(/←/i);
    fireEvent.click(prevButton);

    const currentImage = getByAltText(/Image 1/i);
    expect(currentImage).toBeInTheDocument();
  });
});
