import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Testando Login", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Testa se renderiza o formulário de login", () => {
    render(<Login />);
    const heading = screen.getByText("LOGIN");
    const apiKeyInput = screen.getByPlaceholderText("Digite sua API key");
    const loginButton = screen.getByText("Entrar");

    expect(heading).toBeInTheDocument();
    expect(apiKeyInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("Testa se exibe uma mensagem de erro se a chave API não é fornecida", async () => {
    render(<Login />);
    const apiKeyInput = screen.getByPlaceholderText("Digite sua API key");
    const loginButton = screen.getByText("Entrar");

    expect(apiKeyInput).toBeInTheDocument();

    fireEvent.click(loginButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(
        "Por favor, insira uma API key válida."
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("Testa se navega para '/home' se a chave API for válida", async () => {
    const time = 3000;
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Login />);
    const apiKeyInput = screen.getByPlaceholderText("Digite sua API key");
    const loginButton = screen.getByText("Entrar");

    fireEvent.change(apiKeyInput, { target: { value: "valid-api-key" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      setTimeout(() => {
        expect(navigate).toHaveBeenCalledWith("/home");
      }, time);
    });
  });

  test("Testa se exibe uma mensagem de erro se a chave API for válida", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Login />);
    const apiKeyInput = screen.getByPlaceholderText("Digite sua API key");
    const loginButton = screen.getByText("Entrar");

    fireEvent.change(apiKeyInput, { target: { value: "invalid-api-key" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const errorMessage = screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes("API key inválida. Por favor, verifique novamente.")
        );
      });
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("Testa se exibe uma mensagem de erro se ocorrer um erro durante a verificação da chave API", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Login />);
    const loginButton = screen.getByText("Entrar");

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(() =>
        screen.getByText(
          "Ocorreu um erro ao verificar a API key. Por favor, tente novamente mais tarde."
        )
      ).toThrow();
    });
  });
});
