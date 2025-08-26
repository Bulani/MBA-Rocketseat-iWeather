import { render, screen } from "@testing-library/react-native"
import { Day } from "@components/Day"

import clearDay from "@assets/clear_day.svg"

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: '25/08',
          min: '30ºC',
          max: '34ºC',
          icon: clearDay,
          weather: 'Céu limpo'
        }}
      />
    )

    expect(screen.getByText('25/08')).toBeTruthy()
  })
})