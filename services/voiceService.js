export const processVoiceCommand = (voiceText) => {
    const words = voiceText.toLowerCase().split(" ");
    let source = "Mumbai", destination = "Delhi", date = "2025-03-01";

    if (words.includes("pune")) source = "Pune";
    if (words.includes("nagpur")) destination = "Nagpur";
    if (words.includes("tomorrow")) date = "2025-03-02";

    return { source, destination, date };
};
export const analyzeVoiceCommand = async (voiceInput) => {
    // Dummy voice processing logic (Implement actual NLP logic)
    return { source: "Mumbai", destination: "Delhi", date: "2025-03-01" };
  };
  