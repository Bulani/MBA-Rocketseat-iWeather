import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
  it("should be render next days", () => {
    render(
      <NextDays
        data={[
          { day: '25/08', min: '30ºC', max: '34ºC', icon: clearDay, weather: 'Céu limpo' },
          { day: '26/08', min: '31ºC', max: '32ºC', icon: clearDay, weather: 'Céu limpo' },
          { day: '27/08', min: '20ºC', max: '24ºC', icon: clearDay, weather: 'Nublado' },
          { day: '28/08', min: '29ºC', max: '30ºC', icon: clearDay, weather: 'Céu limpo' },
          { day: '29/08', min: '34ºC', max: '38ºC', icon: clearDay, weather: 'Céu limpo' }
        ]}
      />
    )

    expect(screen.getByText('27/08')).toBeTruthy()
  })
})