using System;

namespace AskSviat
{
    /// <summary>
    /// A simple question processing service that always returns "Ask Sviat" as the answer.
    /// </summary>
    public class QuestionProcessor
    {
        /// <summary>
        /// Processes any question and returns the standard response.
        /// </summary>
        /// <param name="question">The question to process</param>
        /// <returns>Always returns "Ask Sviat"</returns>
        public string ProcessQuestion(string question)
        {
            // Validate input
            if (string.IsNullOrWhiteSpace(question))
            {
                throw new ArgumentException("Question cannot be null or empty.", nameof(question));
            }

            // Log the question (in a real implementation, you might want to use a proper logging framework)
            Console.WriteLine($"Processing question: {question}");

            // Process the question and return the standard response
            return "Ask Sviat";
        }

        /// <summary>
        /// Async version of ProcessQuestion for scenarios requiring asynchronous processing.
        /// </summary>
        /// <param name="question">The question to process</param>
        /// <returns>A task that returns "Ask Sviat"</returns>
        public async Task<string> ProcessQuestionAsync(string question)
        {
            // Validate input
            if (string.IsNullOrWhiteSpace(question))
            {
                throw new ArgumentException("Question cannot be null or empty.", nameof(question));
            }

            // Simulate some async processing (e.g., database lookup, API call, etc.)
            await Task.Delay(100);

            // Log the question
            Console.WriteLine($"Processing question asynchronously: {question}");

            // Return the standard response
            return "Ask Sviat";
        }

        /// <summary>
        /// Batch process multiple questions.
        /// </summary>
        /// <param name="questions">Array of questions to process</param>
        /// <returns>Array of answers, all being "Ask Sviat"</returns>
        public string[] ProcessMultipleQuestions(string[] questions)
        {
            if (questions == null)
            {
                throw new ArgumentNullException(nameof(questions));
            }

            var answers = new string[questions.Length];
            
            for (int i = 0; i < questions.Length; i++)
            {
                answers[i] = ProcessQuestion(questions[i]);
            }

            return answers;
        }
    }

    /// <summary>
    /// Example usage of the QuestionProcessor class
    /// </summary>
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var processor = new QuestionProcessor();

            // Example 1: Single question
            try
            {
                string answer1 = processor.ProcessQuestion("What is the meaning of life?");
                Console.WriteLine($"Answer: {answer1}");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            // Example 2: Async processing
            try
            {
                string answer2 = await processor.ProcessQuestionAsync("How do I learn programming?");
                Console.WriteLine($"Async Answer: {answer2}");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            // Example 3: Multiple questions
            string[] questions = {
                "What's the best programming language?",
                "How does machine learning work?",
                "Should I use React or Vue?"
            };

            try
            {
                string[] answers = processor.ProcessMultipleQuestions(questions);
                
                Console.WriteLine("\nBatch Processing Results:");
                for (int i = 0; i < questions.Length; i++)
                {
                    Console.WriteLine($"Q: {questions[i]}");
                    Console.WriteLine($"A: {answers[i]}");
                    Console.WriteLine();
                }
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            // Example 4: Error handling
            try
            {
                processor.ProcessQuestion("");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Expected error for empty question: {ex.Message}");
            }
        }
    }
}
