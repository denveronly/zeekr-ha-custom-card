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
| `image` | `/local/zeekr001_top.png` (top) or `/local/zeekr001_side.png` (side) | Car image URL |
| `charging_open` | `false` | Start with the Charging section expanded |
| `climate_open` | `false` | Start with the Climate section expanded |

No other plugins are needed: the card draws its own Charging and Climate
drop-downs.

## Car image

The `top` layout is tuned for a **600 × 700 px PNG with a transparent
background**: the top-view car centred, front pointing up, filling about 54 %
of the width and the full height. Save it as `/config/www/zeekr001_top.png`
(Home Assistant serves it as `/local/zeekr001_top.png`; restart HA if the
`www` folder is new).

For the `side` layout, save a 3/4 front-left photo, car facing left and filling
the frame, as `/config/www/zeekr001_side.png`.

Car photos are not included in this repo because of copyright. Use your own
photo or a press image you're allowed to use.

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
