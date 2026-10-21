# Zeekr HA custom card

A Home Assistant dashboard card for the **Zeekr 001**, built for the
[Zeekr EV integration (China / GRIC, English)](https://github.com/denveronly/zeekr_homeassistant_china_gric).

- **Header:** battery, range, inside temperature, odometer
- **The car:** a top-view photo with state badges for every door and window,
  hood and trunk, plus:
  - **All windows** open / close (centre of the roof)
  - **Trunk open / close** (rear)
  - **Charge port lid** toggle at the **left rear**, where the 001's port is
  - tyre pressure next to each wheel
  - anything **open** (door, window, hood, trunk, charge port lid) gets a
    glowing **red** badge on its spot, and a red warning bar appears above the
    car; both disappear when it's closed again
- **Quick actions:** lock, flash lights, sentry mode, sunshade
- **Charging** drop-down: charging switch, plugged in, charge limit,
  power / voltage / current, time to full, charging schedule with start and
  end time, charge port lid
- **Climate** drop-down: thermostat, rapid cool / heat, run time, seat heating
  and ventilation, steering wheel heating, defrost, outside temperature,
  departure schedule

## Files

| File | Use it with |
| --- | --- |
| [`zeekr001_card.yaml`](zeekr001_card.yaml) | a **top-view** image, front pointing up (recommended) |
| [`zeekr001_card_side.yaml`](zeekr001_card_side.yaml) | a **3/4 front-left** studio photo, car facing left |

## Requirements

- The [Zeekr EV integration](https://github.com/denveronly/zeekr_homeassistant_china_gric),
  GRIC channel (needed for the controls)
- [Expander Card](https://github.com/MelleD/lovelace-expander-card) from HACS,
  for the Charging and Climate drop-downs
- A car image in `/config/www/` (not included in this repo; see below)

## Car image

The positions in `zeekr001_card.yaml` are tuned for a **600 × 700 px PNG with a
transparent background**: the top-view car centred, front pointing up, filling
about 54 % of the width and the full height. Save it as
`/config/www/zeekr001_top.png` (Home Assistant serves it as
`/local/zeekr001_top.png`; restart HA if the `www` folder is new).

For the side version, save a 3/4 front-left photo as
`/config/www/zeekr001_side.png`, cropped so the car fills the frame.

Car photos are not included in this repo because of copyright. Use your own
photo or a press image you're allowed to use. If your image is framed
differently, nudge the `left` / `top` percentages of the elements.

## Install

1. Open the YAML and replace every `CAR_` with your car's entity prefix. Find
   it under Settings → Devices & services → Entities by searching
   "battery level": if the entity is `sensor.zeekr_001_battery_level`, replace
   `CAR_` with `zeekr_001_`.
2. Dashboard → Edit → Add card → **Manual** → paste the YAML.

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
