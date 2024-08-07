import React from "react";
import { Box, Avatar, Typography, Divider, Rating, Paper } from "@mui/material";
import { styled } from "@mui/system";

const FeedbackContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#0b1739",

  height: "500px",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "5px",
    height: '2px'
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#4c536a",
    borderRadius: "4px",
    height: '2px',
  },
}));

const ReviewSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const DetailsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: theme.spacing(2),
}));

const CustomerFeedback = () => {
  // Sample feedback data
  const feedbackData = [
    {
      key: 1,
      profile: "https://picsum.photos/40", // This will give a 40x40 real image
      name: "Wade Warren",
      rating: 4,
      review: "Excellent service and great product quality! Highly recommend.",
    },
    {
      key: 2,
      profile: "https://via.placeholder.com/40",
      name: "Jane Cooper",
      rating: 5,
      review:
        "Fantastic experience. Everything was perfect from start to finish.",
    },
    {
      key: 3,
      profile: "https://via.placeholder.com/40",
      name: "John Doe",
      rating: 3,
      review:
        "Good service, but there were some issues with the delivery time.",
    },
    {
      key: 4,
      profile: "https://via.placeholder.com/40",
      name: "Emily Johnson",
      rating: 4,
      review:
        "The product was good, but the customer service could be improved.",
    },
    {
      key: 5,
      profile: "https://via.placeholder.com/40",
      name: "Michael Smith",
      rating: 2,
      review:
        "Not satisfied with the purchase. The quality did not meet my expectations.",
    },
    {
      key: 6,
      profile: "https://via.placeholder.com/40",
      name: "Sarah Lee",
      rating: 5,
      review:
        "Absolutely amazing! The best experience I've had with any company.",
    },
    {
      key: 7,
      profile: "https://via.placeholder.com/40",
      name: "David Brown",
      rating: 3,
      review:
        "Decent experience, but there were some delays in the shipping process.",
    },
    {
      key: 8,
      profile: "https://via.placeholder.com/40",
      name: "Laura Davis",
      rating: 4,
      review:
        "Overall happy with the service. Minor issues were resolved quickly.",
    },
  ];

  return (
    <FeedbackContainer>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "600", color: "#fff" }}
      >
        Customer's Feedback
      </Typography>
      {feedbackData.map((feedback) => (
        <ReviewSection key={feedback.key}>
          <ProfileSection>
            <DetailsSection>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "10px",
                }}
                src={feedback.profile}
                alt={feedback.name}
                sx={{ marginRight: 2 }}
              >
                <Avatar />

                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ color: "#fff" }}
                >
                  {feedback.name}
                </Typography>
              </div>

              <Rating
                name="read-only"
                value={feedback.rating}
                readOnly
                sx={{ marginTop: 1 }}
              />
              <Typography
                variant="body2"
                sx={{ marginTop: 1, color: "#aeb9e1" }}
              >
                {feedback.review}
              </Typography>
            </DetailsSection>
          </ProfileSection>
          <Divider sx={{ marginY: 2 }} />
        </ReviewSection>
      ))}
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
