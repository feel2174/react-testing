import { render, screen } from "@testing-library/react"
import SummaryPage from ".."

test('checkbox and button', () => {
  render(<SummaryPage />)
  const checkbox = screen.getByRole('checkbox', {
    name: '주문확인하셨나요?'
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole('button', {
    name: '주문확인'
  });

  expect(confirmButton.disabled).toBeTruthy();
})