import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });


  test("displays an image with alt text identifying the content", () => {
    render(<App />);
    
    const image = screen.getByAltText(/your description here/i);
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'path/to/your/image.jpg');
  });
  

  test("displays a second-level heading with the text `About me_______`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", {
      name: /About me/i,
      exact: false,
      level: 2,
    });
    expect(secondLevelHeading).toBeInTheDocument();
  });

  test("displays a paragraph with the biography", () => {
    render(<App />);
    
    const paragraph = screen.getByText(/your biography here/i);
    
    expect(paragraph).toBeInTheDocument();
  });
  

  test("displays a link to GitHub", () => {
    render(<App />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
  });
  
  test("displays a link to LinkedIn", () => {
    render(<App />);
    
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
  });
  

