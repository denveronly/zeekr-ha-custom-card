# Zeekr HA custom card

A Home Assistant dashboard card for the **Zeekr 001**, built for the
[Zeekr EV integration (China / GRIC, English)](https://github.com/denveronly/zeekr_homeassistant_china_gric).

- **Header:** big battery % with a colour-coded bar (charge-limit tick, animated while charging), range, a "Charging · 7.2 kW" / "Plugged in" pill, and chips for inside temperature, odometer and last update
- **The car:** a top-view photo with state badges for every door and window,
  hood and trunk, plus:
  - **All windows** open / close (centre of the roof)
  - **Trunk open / close** (rear)
  - **Charge port lid** toggle at the **left rear**, where the 001's port is
  - tyre pressure next to each wheel
  - anything **open** (door, window, hood, trunk, charge port lid) gets a
    glowing **red** badge on its spot, and a red pill in the top-left corner of
    the photo lists what's open; both disappear when it's closed again
- **Quick actions:** lock, flash lights, sentry mode, sunshade
- **Charging** drop-down: charging and charge-port toggles side by side, one
  row with power · voltage · current · time to full, a charge-limit slider,
  and schedule on/off with start and end time in one row
- **Climate** drop-down: thermostat dial with the Heat/Cool and Off buttons
  right under it, rapid cool / rapid heat in the top corners and steering
  wheel heating / defrost in the bottom corners, a 2 × 2 grid of seat heating
  and ventilation, then climate run time and the departure schedule

## Install (HACS)

1. HACS → ⋮ → **Custom repositories** → add
   `https://github.com/denveronly/zeekr-ha-custom-card`, type **Dashboard**.
2. Download **Zeekr card**, then reload the browser (Ctrl/Cmd + Shift + R).
3. Save your car image in `/config/www/` (see [Car image](#car-image)).
4. Add the card to a dashboard (Edit → Add card → Manual):

```yaml
type: custom:zeekr-card
prefix: zeekr_001_
```

`prefix` is the start of your car's entity IDs. Find it under Settings →
Devices & services → Entities by searching "battery level": if the entity is
`sensor.zeekr_001_battery_level`, the prefix is `zeekr_001_`.

### Options

| Option | Default | Description |
| --- | --- | --- |
| `prefix` | *(required)* | Entity prefix of your car |
| `layout` | `top` | `top` for a top-view image, `side` for a 3/4 front-left photo |
| `image` | bundled image (top) or `/local/zeekr001_side.png` (side) | Car image URL |
| `charging_open` | `false` | Start with the Charging section expanded |
| `climate_open` | `false` | Start with the Climate section expanded |

No other plugins are needed: the card draws its own Charging and Climate
drop-downs.

## Car image

The `top` layout uses the top-view image bundled with the card
(`dist/zeekr001_top.png`, downloaded by HACS to
`/hacsfiles/zeekr-ha-custom-card/zeekr001_top.png`), so it works straight after
install. To use your own picture instead, put it in `/config/www/` and set
`image: /local/your_file.png`. The markers are positioned for a **600 × 700 px
PNG with a transparent background**: car centred, front pointing up, filling
about 54 % of the width and the full height.

For the `side` layout, save a 3/4 front-left photo, car facing left and filling
the frame, as `/config/www/zeekr001_side.png`.

## Without HACS (plain YAML)

The same card as plain Lovelace YAML is in [`yaml/`](yaml/): replace every
`CAR_` with your prefix and paste it into a Manual card. That version needs
[Expander Card](https://github.com/MelleD/lovelace-expander-card) for the
drop-downs, and its positions are percentages you can tweak per element.

## Notes

- Doors and individual windows report **state only**: the car has no command
  to open a single door or window. They change colour when open. The window
  icon on the roof controls **all windows**.
- Trunk, charge port lid and door lock **ask for confirmation** before acting.
- The trunk command toggles the power tailgate. From Home Assistant it closes
  **without** the PIN the Zeekr app asks for, so only use it when you can see
  the car.
- The departure schedule uses an untested command format in the integration
  and may fail until it's fixed there.

## License

MIT
