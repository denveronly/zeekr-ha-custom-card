/*
 * Zeekr card for Home Assistant
 * https://github.com/denveronly/zeekr-ha-custom-card
 *
 * type: custom:zeekr-card
 * prefix: zeekr_001_            # your entity prefix (required)
 * layout: top                   # top (default) or side
 * image: /local/my_car.png     # optional; top layout defaults to the bundled image
 * charging_open: false          # start with the Charging section expanded
 * charger_power: sensor.x        # optional: wallbox power, bottom-right of the battery panel
 * extra_entities:               # optional: e.g. your wallbox; listed in Charging,
 *   - select.zeekrcharger_toggle_charging       # numbers also top-left of the battery panel
 *   - number.zeekrcharger_set_charge_current
 *   - entity: number.zeekrcharger_charge_delay
 *     name: Delay
 *     icon: mdi:timer-outline
 * climate_open: false           # start with the Climate section expanded
 */
const ZEEKR_CARD_VERSION = "1.10.0";

const ZEEKR_TEMPLATES = {
 "top": [
  {
   "type": "zeekr-header"
  },
  {
   "type": "picture-elements",
   "image": "/local/zeekr001_top.png",
   "elements": [
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_front_left",
     "icon": "mdi:car-door",
     "style": {
      "left": "19%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_front_right",
     "icon": "mdi:car-door",
     "style": {
      "left": "81%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_rear_left",
     "icon": "mdi:car-door",
     "style": {
      "left": "19%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_rear_right",
     "icon": "mdi:car-door",
     "style": {
      "left": "81%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_left",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "32%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_right",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "68%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_left",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "32%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_right",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "68%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "cover.CAR_all_windows",
     "icon": "mdi:car-windshield-outline",
     "tap_action": {
      "action": "toggle"
     },
     "hold_action": {
      "action": "more-info"
     },
     "style": {
      "left": "50%",
      "top": "51%"
     }
    },
    {
     "type": "state-label",
     "entity": "cover.CAR_all_windows",
     "prefix": "Windows: ",
     "style": {
      "left": "50%",
      "top": "57%",
      "font-size": "11px",
      "opacity": "0.85"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_hood",
     "icon": "mdi:car-select",
     "style": {
      "left": "50%",
      "top": "13%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_trunk",
     "icon": "mdi:car-back",
     "style": {
      "left": "50%",
      "top": "85%"
     }
    },
    {
     "type": "icon",
     "icon": "mdi:arrow-up-down-bold",
     "title": "Trunk open / close",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_trunk_open_close"
      },
      "confirmation": {
       "text": "Open / close the trunk? Make sure nobody is near it."
      }
     },
     "style": {
      "left": "50%",
      "top": "93%",
      "color": "var(--primary-color)"
     }
    },
    {
     "type": "state-icon",
     "entity": "lock.CAR_charge_port_lid",
     "icon": "mdi:ev-plug-type2",
     "tap_action": {
      "action": "toggle",
      "confirmation": {
       "text": "Open / close the charge port lid?"
      }
     },
     "hold_action": {
      "action": "more-info"
     },
     "style": {
      "left": "17%",
      "top": "76%"
     }
    },
    {
     "type": "state-label",
     "entity": "lock.CAR_charge_port_lid",
     "style": {
      "left": "17%",
      "top": "81%",
      "font-size": "11px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_front_left",
     "style": {
      "left": "11%",
      "top": "22%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_front_left",
     "style": {
      "left": "11%",
      "top": "26.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_front_right",
     "style": {
      "left": "89%",
      "top": "22%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_front_right",
     "style": {
      "left": "89%",
      "top": "26.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_rear_left",
     "style": {
      "left": "11%",
      "top": "90%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_rear_left",
     "style": {
      "left": "11%",
      "top": "94.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_rear_right",
     "style": {
      "left": "89%",
      "top": "90%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_rear_right",
     "style": {
      "left": "89%",
      "top": "94.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_front_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_front_left",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "19%",
        "top": "42%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_front_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_front_right",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "81%",
        "top": "42%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_rear_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_rear_left",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "19%",
        "top": "61%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_rear_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_rear_right",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "81%",
        "top": "61%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_front_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_front_left",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "32%",
        "top": "42%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_front_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_front_right",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "68%",
        "top": "42%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_rear_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_rear_left",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "32%",
        "top": "61%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_rear_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_rear_right",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "68%",
        "top": "61%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_hood",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_hood",
       "icon": "mdi:car-select",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "50%",
        "top": "13%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_trunk",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_trunk",
       "icon": "mdi:car-back",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "50%",
        "top": "85%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "lock.CAR_charge_port_lid",
       "state": "unlocked"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "lock.CAR_charge_port_lid",
       "icon": "mdi:ev-plug-type2",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "17%",
        "top": "76%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    }
   ]
  },
  {
   "type": "zeekr-actions"
  },
  {
   "type": "custom:expander-card",
   "title": "Charging",
   "expanded": false,
   "cards": [
    {
     "type": "entities",
     "entities": [
      {
       "entity": "switch.CAR_charging",
       "name": "Charging"
      },
      {
       "entity": "binary_sensor.CAR_charger_plugged_in",
       "name": "Plugged in"
      },
      {
       "entity": "number.CAR_charge_limit",
       "name": "Charge limit"
      },
      {
       "entity": "sensor.CAR_charging_power",
       "name": "Power"
      },
      {
       "entity": "sensor.CAR_charging_voltage",
       "name": "Voltage"
      },
      {
       "entity": "sensor.CAR_charging_current",
       "name": "Current"
      },
      {
       "entity": "sensor.CAR_estimated_full_charge_time",
       "name": "Full in"
      },
      {
       "type": "section",
       "label": "Schedule"
      },
      {
       "entity": "switch.CAR_charging_schedule",
       "name": "Scheduled charging"
      },
      {
       "entity": "time.CAR_charging_start_time",
       "name": "Start"
      },
      {
       "entity": "time.CAR_charging_end_time",
       "name": "End"
      },
      {
       "entity": "lock.CAR_charge_port_lid",
       "name": "Charge port lid"
      }
     ]
    }
   ]
  },
  {
   "type": "custom:expander-card",
   "title": "Climate",
   "expanded": false,
   "cards": [
    {
     "type": "thermostat",
     "entity": "climate.CAR_climate"
    },
    {
     "type": "grid",
     "columns": 2,
     "square": false,
     "cards": [
      {
       "type": "button",
       "entity": "button.CAR_rapid_cooling",
       "name": "Rapid cool",
       "tap_action": {
        "action": "perform-action",
        "perform_action": "button.press",
        "target": {
         "entity_id": "button.CAR_rapid_cooling"
        }
       }
      },
      {
       "type": "button",
       "entity": "button.CAR_rapid_heating",
       "name": "Rapid heat",
       "tap_action": {
        "action": "perform-action",
        "perform_action": "button.press",
        "target": {
         "entity_id": "button.CAR_rapid_heating"
        }
       }
      }
     ]
    },
    {
     "type": "entities",
     "entities": [
      {
       "entity": "number.CAR_climate_run_duration",
       "name": "Run time"
      },
      {
       "entity": "select.CAR_seat_heating_driver",
       "name": "Seat heat driver"
      },
      {
       "entity": "select.CAR_seat_heating_passenger",
       "name": "Seat heat passenger"
      },
      {
       "entity": "select.CAR_seat_ventilation_driver",
       "name": "Seat vent driver"
      },
      {
       "entity": "select.CAR_seat_ventilation_passenger",
       "name": "Seat vent passenger"
      },
      {
       "entity": "switch.CAR_steering_wheel_heating",
       "name": "Steering wheel"
      },
      {
       "entity": "switch.CAR_windshield_defrost",
       "name": "Defrost"
      },
      {
       "entity": "sensor.CAR_exterior_temperature",
       "name": "Outside"
      },
      {
       "type": "section",
       "label": "Departure"
      },
      {
       "entity": "switch.CAR_departure_schedule",
       "name": "Departure schedule"
      },
      {
       "entity": "datetime.CAR_scheduled_departure_time",
       "name": "Departure time"
      },
      {
       "entity": "switch.CAR_departure_climate",
       "name": "Pre-condition"
      }
     ]
    }
   ]
  }
 ],
 "side": [
  {
   "type": "zeekr-header"
  },
  {
   "type": "picture-elements",
   "image": "/local/zeekr001_side.png",
   "elements": [
    {
     "type": "state-label",
     "entity": "binary_sensor.CAR_door_front_right",
     "prefix": "Right side: ",
     "style": {
      "left": "22%",
      "top": "7%",
      "font-size": "11px",
      "opacity": 0.8
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_front_right",
     "icon": "mdi:car-door",
     "style": {
      "left": "40%",
      "top": "7%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_right",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "47%",
      "top": "7%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_rear_right",
     "icon": "mdi:car-door",
     "style": {
      "left": "56%",
      "top": "7%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_right",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "63%",
      "top": "7%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_left",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "62%",
      "top": "37%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_left",
     "icon": "mdi:window-closed-variant",
     "style": {
      "left": "78%",
      "top": "37%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_front_left",
     "icon": "mdi:car-door",
     "style": {
      "left": "62%",
      "top": "56%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_door_rear_left",
     "icon": "mdi:car-door",
     "style": {
      "left": "79%",
      "top": "56%"
     }
    },
    {
     "type": "state-icon",
     "entity": "cover.CAR_all_windows",
     "icon": "mdi:car-windshield-outline",
     "tap_action": {
      "action": "toggle"
     },
     "hold_action": {
      "action": "more-info"
     },
     "style": {
      "left": "70%",
      "top": "26%"
     }
    },
    {
     "type": "state-label",
     "entity": "cover.CAR_all_windows",
     "prefix": "Windows: ",
     "style": {
      "left": "70%",
      "top": "32%",
      "font-size": "11px",
      "opacity": "0.85"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_hood",
     "icon": "mdi:car-select",
     "style": {
      "left": "15%",
      "top": "47%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_trunk",
     "icon": "mdi:car-back",
     "style": {
      "left": "93%",
      "top": "33%"
     }
    },
    {
     "type": "icon",
     "icon": "mdi:arrow-up-down-bold",
     "title": "Trunk open / close",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_trunk_open_close"
      },
      "confirmation": {
       "text": "Open / close the trunk? Make sure nobody is near it."
      }
     },
     "style": {
      "left": "93%",
      "top": "25%",
      "color": "var(--primary-color)"
     }
    },
    {
     "type": "state-icon",
     "entity": "lock.CAR_charge_port_lid",
     "icon": "mdi:ev-plug-type2",
     "tap_action": {
      "action": "toggle",
      "confirmation": {
       "text": "Open / close the charge port lid?"
      }
     },
     "hold_action": {
      "action": "more-info"
     },
     "style": {
      "left": "95%",
      "top": "44%"
     }
    },
    {
     "type": "state-label",
     "entity": "lock.CAR_charge_port_lid",
     "style": {
      "left": "93%",
      "top": "51%",
      "font-size": "11px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_front_left",
     "style": {
      "left": "41%",
      "top": "82%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_front_left",
     "style": {
      "left": "41%",
      "top": "86.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_rear_left",
     "style": {
      "left": "91%",
      "top": "78%",
      "font-size": "12px"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_rear_left",
     "style": {
      "left": "91%",
      "top": "82.5%",
      "font-size": "11px",
      "opacity": "0.7"
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_front_right",
     "prefix": "FR ",
     "style": {
      "left": "30%",
      "top": "94%",
      "font-size": "11px",
      "opacity": 0.8
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_front_right",
     "style": {
      "left": "30%",
      "top": "98.5%",
      "font-size": "11px",
      "opacity": "0.7"
     },
     "prefix": "FR "
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_pressure_rear_right",
     "prefix": "RR ",
     "style": {
      "left": "55%",
      "top": "94%",
      "font-size": "11px",
      "opacity": 0.8
     }
    },
    {
     "type": "state-label",
     "entity": "sensor.CAR_tire_temperature_rear_right",
     "style": {
      "left": "55%",
      "top": "98.5%",
      "font-size": "11px",
      "opacity": "0.7"
     },
     "prefix": "RR "
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_front_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_front_right",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "40%",
        "top": "7%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_front_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_front_right",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "47%",
        "top": "7%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_rear_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_rear_right",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "56%",
        "top": "7%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_rear_right",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_rear_right",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "63%",
        "top": "7%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_front_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_front_left",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "62%",
        "top": "37%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_window_rear_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_window_rear_left",
       "icon": "mdi:window-open-variant",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "78%",
        "top": "37%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_front_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_front_left",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "62%",
        "top": "56%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_door_rear_left",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_door_rear_left",
       "icon": "mdi:car-door",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "79%",
        "top": "56%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_hood",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_hood",
       "icon": "mdi:car-select",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "15%",
        "top": "47%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "binary_sensor.CAR_trunk",
       "state": "on"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "binary_sensor.CAR_trunk",
       "icon": "mdi:car-back",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "93%",
        "top": "33%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    },
    {
     "type": "conditional",
     "conditions": [
      {
       "entity": "lock.CAR_charge_port_lid",
       "state": "unlocked"
      }
     ],
     "elements": [
      {
       "type": "icon",
       "entity": "lock.CAR_charge_port_lid",
       "icon": "mdi:ev-plug-type2",
       "title": "Open",
       "tap_action": {
        "action": "more-info"
       },
       "style": {
        "left": "95%",
        "top": "44%",
        "color": "white",
        "background": "rgba(229, 57, 53, 0.9)",
        "border-radius": "50%",
        "padding": "6px",
        "box-shadow": "0 0 14px 6px rgba(229, 57, 53, 0.6)"
       }
      }
     ]
    }
   ]
  },
  {
   "type": "zeekr-actions"
  },
  {
   "type": "custom:expander-card",
   "title": "Charging",
   "expanded": false,
   "cards": [
    {
     "type": "entities",
     "entities": [
      {
       "entity": "switch.CAR_charging",
       "name": "Charging"
      },
      {
       "entity": "binary_sensor.CAR_charger_plugged_in",
       "name": "Plugged in"
      },
      {
       "entity": "number.CAR_charge_limit",
       "name": "Charge limit"
      },
      {
       "entity": "sensor.CAR_charging_power",
       "name": "Power"
      },
      {
       "entity": "sensor.CAR_charging_voltage",
       "name": "Voltage"
      },
      {
       "entity": "sensor.CAR_charging_current",
       "name": "Current"
      },
      {
       "entity": "sensor.CAR_estimated_full_charge_time",
       "name": "Full in"
      },
      {
       "type": "section",
       "label": "Schedule"
      },
      {
       "entity": "switch.CAR_charging_schedule",
       "name": "Scheduled charging"
      },
      {
       "entity": "time.CAR_charging_start_time",
       "name": "Start"
      },
      {
       "entity": "time.CAR_charging_end_time",
       "name": "End"
      },
      {
       "entity": "lock.CAR_charge_port_lid",
       "name": "Charge port lid"
      }
     ]
    }
   ]
  },
  {
   "type": "custom:expander-card",
   "title": "Climate",
   "expanded": false,
   "cards": [
    {
     "type": "thermostat",
     "entity": "climate.CAR_climate"
    },
    {
     "type": "grid",
     "columns": 2,
     "square": false,
     "cards": [
      {
       "type": "button",
       "entity": "button.CAR_rapid_cooling",
       "name": "Rapid cool",
       "tap_action": {
        "action": "perform-action",
        "perform_action": "button.press",
        "target": {
         "entity_id": "button.CAR_rapid_cooling"
        }
       }
      },
      {
       "type": "button",
       "entity": "button.CAR_rapid_heating",
       "name": "Rapid heat",
       "tap_action": {
        "action": "perform-action",
        "perform_action": "button.press",
        "target": {
         "entity_id": "button.CAR_rapid_heating"
        }
       }
      }
     ]
    },
    {
     "type": "entities",
     "entities": [
      {
       "entity": "number.CAR_climate_run_duration",
       "name": "Run time"
      },
      {
       "entity": "select.CAR_seat_heating_driver",
       "name": "Seat heat driver"
      },
      {
       "entity": "select.CAR_seat_heating_passenger",
       "name": "Seat heat passenger"
      },
      {
       "entity": "select.CAR_seat_ventilation_driver",
       "name": "Seat vent driver"
      },
      {
       "entity": "select.CAR_seat_ventilation_passenger",
       "name": "Seat vent passenger"
      },
      {
       "entity": "switch.CAR_steering_wheel_heating",
       "name": "Steering wheel"
      },
      {
       "entity": "switch.CAR_windshield_defrost",
       "name": "Defrost"
      },
      {
       "entity": "sensor.CAR_exterior_temperature",
       "name": "Outside"
      },
      {
       "type": "section",
       "label": "Departure"
      },
      {
       "entity": "switch.CAR_departure_schedule",
       "name": "Departure schedule"
      },
      {
       "entity": "datetime.CAR_scheduled_departure_time",
       "name": "Departure time"
      },
      {
       "entity": "switch.CAR_departure_climate",
       "name": "Pre-condition"
      }
     ]
    }
   ]
  }
 ]
};

// The top-view image ships with the card (HACS downloads everything in dist/
// to /hacsfiles/zeekr-ha-custom-card/). The side layout still needs your own photo.
const DEFAULT_IMAGES = {
  top: "/hacsfiles/zeekr-ha-custom-card/zeekr001_top.png",
  side: "/local/zeekr001_side.png",
};

// What counts as "open" for the warning pill on the photo.
const ZK_OPEN = [
  ["binary_sensor", "door_front_left", "front-left door"],
  ["binary_sensor", "door_front_right", "front-right door"],
  ["binary_sensor", "door_rear_left", "rear-left door"],
  ["binary_sensor", "door_rear_right", "rear-right door"],
  ["binary_sensor", "window_front_left", "front-left window"],
  ["binary_sensor", "window_front_right", "front-right window"],
  ["binary_sensor", "window_rear_left", "rear-left window"],
  ["binary_sensor", "window_rear_right", "rear-right window"],
  ["binary_sensor", "hood", "hood"],
  ["binary_sensor", "trunk", "trunk"],
  ["lock", "charge_port_lid", "charge port"],
];

// Drop anything that points at an entity this car doesn't have, so a missing
// feature (e.g. no sunshade on the 001) disappears instead of showing a warning.
function zkPrune(conf, has) {
  if (Array.isArray(conf)) {
    return conf.map((c) => zkPrune(c, has)).filter((c) => c !== null);
  }
  if (!conf || typeof conf !== "object") return conf;
  if (typeof conf.entity === "string" && conf.entity.includes(".") && !has(conf.entity)) return null;
  const out = { ...conf };
  if (Array.isArray(out.conditions)) {
    out.conditions = zkPrune(out.conditions, has);
    if (!out.conditions.length) return null;
  }
  for (const key of ["cards", "elements", "entities"]) {
    if (Array.isArray(out[key])) {
      out[key] = zkPrune(out[key], has);
      if (!out[key].length && key !== "entities") return null;
    }
  }
  if (out.card) {
    out.card = zkPrune(out.card, has);
    if (!out.card) return null;
  }
  if (out.type === "grid" && Array.isArray(out.cards)) out.columns = Math.min(out.columns || 4, out.cards.length);
  return out;
}

class ZeekrCard extends HTMLElement {
  setConfig(config) {
    if (!config || !config.prefix) {
      throw new Error("Set 'prefix', e.g. prefix: zeekr_001_ (from sensor.zeekr_001_battery_level)");
    }
    const layout = config.layout || "top";
    if (!ZEEKR_TEMPLATES[layout]) {
      throw new Error("layout must be 'top' or 'side'");
    }
    this._config = { ...config, layout, prefix: String(config.prefix).replace(/\.$/, "") };
    this._builtFor = null;
    if (this._hass) this._build();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._config && this._builtFor !== this._config) {
      this._build();
      return;
    }
    (this._children || []).forEach((c) => (c.hass = hass));
    this._updateHeader();
    this._updateOpen();
    this._updateLive();
    this._updateCorners();
    this._updateActions();
    this._updateOverlays();
    this._updateSched();
    this._updateCtrls();
    this._updateSeats();
  }

  getCardSize() {
    return 14;
  }

  static getStubConfig() {
    return { prefix: "zeekr_001_", layout: "top" };
  }

  _id(domain, key) {
    return `${domain}.${this._config.prefix}${key}`;
  }

  _cardConfigs() {
    const raw = JSON.stringify(ZEEKR_TEMPLATES[this._config.layout]).split("CAR_").join(this._config.prefix);
    let cards = JSON.parse(raw);
    const image = this._config.image || DEFAULT_IMAGES[this._config.layout];
    cards.forEach((c) => {
      if (c.type === "picture-elements") c.image = image;
    });
    const states = (this._hass && this._hass.states) || null;
    if (states) cards = zkPrune(cards, (id) => id in states);
    return cards;
  }

  _moreInfo(entityId) {
    const ev = new Event("hass-more-info", { bubbles: true, composed: true });
    ev.detail = { entityId };
    this.dispatchEvent(ev);
  }

  _st(domain, key) {
    return this._hass && this._hass.states[this._id(domain, key)];
  }

  _num(domain, key, digits) {
    const st = this._st(domain, key);
    if (!st || isNaN(parseFloat(st.state))) return null;
    const lang = (this._hass.locale && this._hass.locale.language) || undefined;
    const n = Number(parseFloat(st.state).toFixed(digits));
    return { n, text: n.toLocaleString(lang, { maximumFractionDigits: digits }), unit: st.attributes.unit_of_measurement || "" };
  }

  _ago(value) {
    const t = Date.parse(value);
    if (isNaN(t)) return null;
    const min = Math.max(0, Math.round((Date.now() - t) / 60000));
    if (min < 1) return "just now";
    if (min < 60) return `${min} min`;
    const h = Math.round(min / 60);
    if (h < 48) return `${h} h`;
    return `${Math.round(h / 24)} d`;
  }

  _extras() {
    const list = this._config.extra_entities || this._config.charger_entities || [];
    return (Array.isArray(list) ? list : [list])
      .map((e) => (typeof e === "string" ? { entity: e } : e))
      .filter((e) => e && e.entity);
  }

  // The wallbox entities (extra_entities + charger_power) all go unavailable
  // when the grid is down. Then show one "Offgrid" badge instead of dashes.
  _chargerOffgrid() {
    if (!this._hass) return false;
    const ids = this._extras().map((e) => e.entity);
    if (this._config.charger_power) ids.push(this._config.charger_power);
    if (!ids.length) return false;
    return ids.every((id) => {
      const st = this._hass.states[id];
      return !st || st.state === "unavailable" || st.state === "unknown";
    });
  }

  _extraIcon(e) {
    if (e.icon) return e.icon;
    const st = this._hass && this._hass.states[e.entity];
    const unit = (st && st.attributes.unit_of_measurement) || "";
    const name = `${e.entity} ${(st && st.attributes.friendly_name) || ""}`.toLowerCase();
    if (/^(h|min|s)$/.test(unit) || /delay|timer|time/.test(name)) return "mdi:timer-outline";
    if (unit === "A" || /current|amp/.test(name)) return "mdi:ev-plug-type2";
    if (/^k?W$/.test(unit)) return "mdi:flash";
    if (/^(input_)?select\./.test(e.entity)) return "mdi:ev-station";
    return (st && st.attributes.icon) || "mdi:tune-variant";
  }

  _fmt(st, digits) {
    if (!st) return null;
    const lang = (this._hass.locale && this._hass.locale.language) || undefined;
    const unit = st.attributes.unit_of_measurement || "";
    const f = parseFloat(st.state);
    if (isNaN(f)) return st.state;
    const d = digits !== undefined ? digits : Number.isInteger(f) ? 0 : 1;
    const text = Number(f.toFixed(d)).toLocaleString(lang, { maximumFractionDigits: d });
    return unit === "%" ? `${text}%` : unit ? `${text} ${unit}` : text;
  }

  _makeHeader() {
    const hero = document.createElement("div");
    hero.className = "zk-hero";
    hero.innerHTML = `
      <div class="zk-main" data-more="sensor:battery_level">
        <div class="zk-soc-row">
          <span class="zk-soc">–</span><span class="zk-soc-unit">%</span>
          <span class="zk-pill zk-charge" hidden><ha-icon icon="mdi:lightning-bolt"></ha-icon><span></span></span>
          <div class="zk-extras"></div>
        </div>
        <div class="zk-bar"><div class="zk-fill"></div><div class="zk-limit" hidden></div></div>
        <div class="zk-range-row">
          <div class="zk-range" data-more="sensor:range"><ha-icon icon="mdi:map-marker-distance"></ha-icon><span>–</span></div>
          <div class="zk-cpow" hidden><ha-icon icon="mdi:car-electric"></ha-icon><b>–</b></div>
        </div>
      </div>`;
    const cp = this._config.charger_power;
    if (cp) {
      hero.querySelector(".zk-cpow").addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._moreInfo(cp);
      });
    }
    const ex = hero.querySelector(".zk-extras");
    this._extraEls = [];
    for (const e of this._extras().filter((x) => /^(input_)?number\.|^sensor\./.test(x.entity))) {
      const el = document.createElement("span");
      el.className = "zk-extra";
      el.title = e.name || e.entity;
      el.innerHTML = `<ha-icon icon="${this._extraIcon(e)}"></ha-icon><b>–</b>`;
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._moreInfo(e.entity);
      });
      ex.appendChild(el);
      this._extraEls.push({ e, el });
    }
    const og = document.createElement("span");
    og.className = "zk-extra zk-offgrid";
    og.hidden = true;
    og.innerHTML = `<ha-icon icon="mdi:transmission-tower-off"></ha-icon><b>Offgrid</b>`;
    ex.appendChild(og);
    this._offgridChip = og;
    ex.hidden = this._extraEls.length === 0 && !this._config.charger_power;
    hero.querySelectorAll("[data-more]").forEach((el) => {
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const [domain, key] = el.dataset.more.split(":");
        this._moreInfo(this._id(domain, key));
      });
    });
    this._hero = hero;
    return hero;
  }

  _updateHeader() {
    const h = this._hero;
    if (!h || !this._hass) return;
    const soc = this._num("sensor", "battery_level", 0);
    h.querySelector(".zk-soc").textContent = soc ? soc.text : "–";
    const fill = h.querySelector(".zk-fill");
    const pct = soc ? Math.max(0, Math.min(100, soc.n)) : 0;
    fill.style.width = pct + "%";
    fill.style.backgroundColor = pct <= 20 ? "var(--error-color, #e53935)" : pct <= 50 ? "var(--warning-color, #f9a825)" : "var(--success-color, #43a047)";
    const limit = this._num("number", "charge_limit", 0) || this._num("sensor", "charge_limit", 0);
    const lim = h.querySelector(".zk-limit");
    if (limit && limit.n > 0 && limit.n < 100) {
      lim.hidden = false;
      lim.style.left = limit.n + "%";
      lim.title = `Charge limit ${limit.text}%`;
    } else lim.hidden = true;

    const range = this._num("sensor", "range", 0);
    h.querySelector(".zk-range span").textContent = range ? `${range.text} ${range.unit || "km"} range` : "–";

    // "On" while the charging switch is on but no power flows; "Charging" once kW > 0.
    const charging = this._st("binary_sensor", "charging") || this._st("switch", "charging");
    const plugged = this._st("binary_sensor", "charger_plugged_in");
    const pw = this._num("sensor", "charging_power", 1);
    const isOn = !!charging && charging.state === "on";
    const flowing = isOn && !!pw && pw.n > 0;
    const isPlugged = !!plugged && plugged.state === "on";
    const pill = h.querySelector(".zk-charge");
    if (isOn || isPlugged) {
      pill.hidden = false;
      pill.classList.toggle("on", flowing);
      pill.classList.toggle("armed", isOn && !flowing);
      pill.querySelector("span").textContent = flowing ? `Charging · ${pw.text} ${pw.unit}` : isOn ? "On" : "Plugged in";
      pill.querySelector("ha-icon").setAttribute("icon", flowing ? "mdi:lightning-bolt" : isOn ? "mdi:power" : "mdi:power-plug");
    } else pill.hidden = true;
    h.querySelector(".zk-main").classList.toggle("charging", flowing);

    const cpId = this._config.charger_power;
    const cpEl = h.querySelector(".zk-cpow");
    const cpSt = cpId && this._hass.states[cpId];
    cpEl.hidden = !cpSt;
    if (cpSt) {
      cpEl.querySelector("b").textContent = this._fmt(cpSt);
      const kw = parseFloat(cpSt.state);
      cpEl.classList.toggle("on", flowing || (!isNaN(kw) && kw > 0));
    }

    const offgrid = this._chargerOffgrid();
    if (this._offgridChip) this._offgridChip.hidden = !offgrid;
    if (offgrid) cpEl.hidden = true;

    for (const { e, el } of this._extraEls || []) {
      el.hidden = offgrid;
      const st = this._hass.states[e.entity];
      el.querySelector("b").textContent = st ? this._fmt(st) : "–";
      const ic = el.querySelector("ha-icon");
      const want = this._extraIcon(e);
      if (ic.getAttribute("icon") !== want) ic.setAttribute("icon", want);
      el.classList.toggle("na", !st || st.state === "unavailable");
    }
  }

  // Values drawn on the photo: inside temperature on the windscreen,
  // odometer + service above the rear-right tyre, last update top-right.
  _makeOverlays(wrap) {
    const L = {
      top: { temp: [50, 31], odo: [87, 79] },
      side: { temp: [45, 31], odo: [86, 66] },
    }[this._config.layout] || { temp: [50, 31], odo: [87, 79] };
    const mk = (cls, html, more, pos) => {
      const el = document.createElement("div");
      el.className = `zk-ov ${cls}`;
      el.innerHTML = html;
      if (pos) {
        el.style.left = pos[0] + "%";
        el.style.top = pos[1] + "%";
      }
      if (more) {
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          const [d, k] = more.split(":");
          this._moreInfo(this._id(d, k));
        });
      }
      wrap.appendChild(el);
      return el;
    };
    this._ov = {
      temp: mk("zk-ov-temp", `<ha-icon icon="mdi:thermometer"></ha-icon><b>–</b>`, "sensor:interior_temperature", L.temp),
      odo: mk("zk-ov-odo",
        `<div data-k="odometer"><ha-icon icon="mdi:counter"></ha-icon><b>–</b></div>
         <div data-k="service_distance_remaining"><ha-icon icon="mdi:wrench-clock"></ha-icon><b>–</b></div>`, null, L.odo),
      upd: mk("zk-ov-upd", `<ha-icon icon="mdi:access-point"></ha-icon><b>–</b>`, "sensor:last_status_report"),
    };
    this._ov.odo.querySelectorAll("[data-k]").forEach((el) =>
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._moreInfo(this._id("sensor", el.dataset.k));
      }));
  }

  _updateOverlays() {
    const ov = this._ov;
    if (!ov || !this._hass) return;
    const t = this._num("sensor", "interior_temperature", 1);
    ov.temp.querySelector("b").textContent = t ? `${t.text}°` : "–";
    ov.temp.hidden = !t;
    let any = false;
    ov.odo.querySelectorAll("[data-k]").forEach((el) => {
      const v = this._num("sensor", el.dataset.k, 0);
      el.querySelector("b").textContent = v ? `${v.text} ${v.unit || "km"}` : "–";
      el.hidden = !v;
      any = any || !!v;
    });
    ov.odo.hidden = !any;
    const rep = this._st("sensor", "last_status_report");
    const ago = rep && this._ago(rep.state);
    ov.upd.querySelector("b").textContent = ago || "–";
    ov.upd.hidden = !ago;
  }

  _updateOpen() {
    const pill = this._openPill;
    if (!pill || !this._hass) return;
    const open = ZK_OPEN.filter(([d, k]) => {
      const st = this._st(d, k);
      return st && (d === "lock" ? st.state === "unlocked" : st.state === "on");
    }).map(([, , label]) => label);
    pill.hidden = open.length === 0;
    pill.querySelector("span").textContent = open.length ? `Open: ${open.join(", ")}` : "";
  }

  _has(id) {
    return !this._hass || id in this._hass.states;
  }

  _prune(conf) {
    return zkPrune(conf, (id) => this._has(id));
  }

  _call(domain, service, entityId) {
    if (this._hass) this._hass.callService(domain, service, { entity_id: entityId });
  }

  // ---------- Charging section ----------
  _buildCharging(helpers, body) {
    const id = (d, k) => this._id(d, k);
    const tiles = this._prune({
      type: "grid", columns: 2, square: false,
      cards: [
        { type: "tile", entity: id("switch", "charging"), name: "Charging", icon: "mdi:ev-station",
          tap_action: { action: "toggle" }, icon_tap_action: { action: "toggle" } },
        { type: "tile", entity: id("lock", "charge_port_lid"), name: "Charge port", icon: "mdi:ev-plug-type2",
          tap_action: { action: "toggle", confirmation: { text: "Open / close the charge port lid?" } },
          icon_tap_action: { action: "toggle", confirmation: { text: "Open / close the charge port lid?" } } },
      ],
    });
    if (tiles) this._addCard(helpers, body, tiles);

    // live numbers in one row
    const live = document.createElement("div");
    live.className = "zk-live";
    live.innerHTML = `
      <div data-k="charging_power"><ha-icon icon="mdi:flash"></ha-icon><b>–</b><span>Power</span></div>
      <div data-k="charging_voltage"><ha-icon icon="mdi:sine-wave"></ha-icon><b>–</b><span>Voltage</span></div>
      <div data-k="charging_current"><ha-icon icon="mdi:current-ac"></ha-icon><b>–</b><span>Current</span></div>
      <div data-k="estimated_full_charge_time"><ha-icon icon="mdi:timer-sand"></ha-icon><b>–</b><span>Full in</span></div>`;
    live.querySelectorAll("[data-k]").forEach((el) =>
      el.addEventListener("click", () => this._moreInfo(id("sensor", el.dataset.k))));
    this._live = live;
    body.appendChild(live);

    const limit = this._prune({
      type: "tile", entity: id("number", "charge_limit"), name: "Charge limit", icon: "mdi:battery-arrow-up",
      features: [{ type: "numeric-input", style: "slider" }],
    });
    if (limit) this._addCard(helpers, body, limit);

    // Compact schedule row: toggle · start → end
    const sw = id("switch", "charging_schedule");
    const t0 = id("time", "charging_start_time");
    const t1 = id("time", "charging_end_time");
    if (this._has(sw) || this._has(t0)) {
      const row = document.createElement("div");
      row.className = "zk-sched";
      row.innerHTML = `
        <button class="zk-sched-tg" title="Scheduled charging"><ha-icon icon="mdi:calendar-clock"></ha-icon><span>Schedule</span></button>
        <button class="zk-sched-t" data-e="${t0}"><b>–</b></button>
        <ha-icon class="zk-sched-arrow" icon="mdi:arrow-right"></ha-icon>
        <button class="zk-sched-t" data-e="${t1}"><b>–</b></button>`;
      row.querySelector(".zk-sched-tg").addEventListener("click", () => this._call("switch", "toggle", sw));
      row.querySelector(".zk-sched-tg").addEventListener("contextmenu", (ev) => {
        ev.preventDefault();
        this._moreInfo(sw);
      });
      row.querySelectorAll(".zk-sched-t").forEach((el) => el.addEventListener("click", () => this._moreInfo(el.dataset.e)));
      this._sched = { row, sw, t0, t1 };
      body.appendChild(row);
    }

    // Extra entities (e.g. a wallbox) below the schedule, as one compact row
    const extras = this._extras().filter((e) => this._has(e.entity));
    if (extras.length) {
      const row = document.createElement("div");
      row.className = "zk-ctrl";
      this._ctrls = [];
      for (const e of extras) {
        const dom = e.entity.split(".")[0];
        const el = document.createElement("div");
        el.className = "zk-ctrl-item";
        el.title = e.name || e.entity;
        if (dom === "select" || dom === "input_select") {
          el.classList.add("sel");
          el.innerHTML = `<ha-icon icon="${this._extraIcon(e)}"></ha-icon><select></select>`;
          el.querySelector("select").addEventListener("change", (ev) =>
            this._hass.callService(dom, "select_option", { entity_id: e.entity, option: ev.target.value }));
        } else if (dom === "number" || dom === "input_number") {
          el.innerHTML = `<ha-icon icon="${this._extraIcon(e)}"></ha-icon>
            <button class="m" aria-label="Decrease">−</button><b>–</b><button class="p" aria-label="Increase">+</button>`;
          const step = (dir) => {
            const st = this._hass.states[e.entity];
            if (!st) return;
            const a = st.attributes;
            const stp = Number(a.step) || 1;
            let v = parseFloat(st.state) + dir * stp;
            if (a.min !== undefined) v = Math.max(Number(a.min), v);
            if (a.max !== undefined) v = Math.min(Number(a.max), v);
            v = Number(v.toFixed(6));
            this._hass.callService(dom, "set_value", { entity_id: e.entity, value: v });
          };
          el.querySelector(".m").addEventListener("click", () => step(-1));
          el.querySelector(".p").addEventListener("click", () => step(1));
        } else {
          el.innerHTML = `<ha-icon icon="${this._extraIcon(e)}"></ha-icon><b>–</b>`;
          el.addEventListener("click", () => this._call("homeassistant", "toggle", e.entity));
        }
        el.querySelector("ha-icon").addEventListener("click", (ev) => {
          ev.stopPropagation();
          this._moreInfo(e.entity);
        });
        row.appendChild(el);
        this._ctrls.push({ e, el, dom });
      }
      const og = document.createElement("div");
      og.className = "zk-ctrl-offgrid";
      og.hidden = true;
      og.innerHTML = `<ha-icon icon="mdi:transmission-tower-off"></ha-icon><span><b>Offgrid</b> · charger unavailable</span>`;
      body.appendChild(og);
      this._ctrlOffgrid = og;
      this._ctrlRow = row;
      body.appendChild(row);
    }
  }

  _updateCtrls() {
    if (!this._ctrls || !this._hass) return;
    const offgrid = this._chargerOffgrid();
    if (this._ctrlRow) this._ctrlRow.hidden = offgrid;
    if (this._ctrlOffgrid) this._ctrlOffgrid.hidden = !offgrid;
    for (const { e, el, dom } of this._ctrls) {
      const st = this._hass.states[e.entity];
      el.classList.toggle("na", !st || st.state === "unavailable");
      if (!st) continue;
      if (dom === "select" || dom === "input_select") {
        const sel = el.querySelector("select");
        const opts = st.attributes.options || [];
        if (sel.dataset.opts !== JSON.stringify(opts)) {
          sel.innerHTML = opts.map((o) => `<option value="${String(o).replace(/"/g, "&quot;")}">${o}</option>`).join("");
          sel.dataset.opts = JSON.stringify(opts);
        }
        if (document.activeElement !== sel) sel.value = st.state;
      } else if (dom === "number" || dom === "input_number") {
        el.querySelector("b").textContent = this._fmt(st);
        const v = parseFloat(st.state);
        el.querySelector(".m").disabled = st.attributes.min !== undefined && v <= Number(st.attributes.min);
        el.querySelector(".p").disabled = st.attributes.max !== undefined && v >= Number(st.attributes.max);
      } else {
        el.querySelector("b").textContent = this._fmt(st);
        el.classList.toggle("on", st.state === "on");
      }
    }
  }

  _updateSched() {
    const s = this._sched;
    if (!s || !this._hass) return;
    const st = this._hass.states;
    const on = st[s.sw] && st[s.sw].state === "on";
    s.row.classList.toggle("on", !!on);
    const hhmm = (id) => {
      const v = st[id] && st[id].state;
      return v && /^\d{1,2}:\d{2}/.test(v) ? v.slice(0, 5) : "–";
    };
    const [a, b] = s.row.querySelectorAll(".zk-sched-t b");
    a.textContent = hhmm(s.t0);
    b.textContent = hhmm(s.t1);
  }

  _updateLive() {
    const live = this._live;
    if (!live || !this._hass) return;
    const charging = this._st("binary_sensor", "charging");
    const on = !!charging && charging.state === "on";
    live.classList.toggle("idle", !on);
    live.querySelectorAll("[data-k]").forEach((el) => {
      const k = el.dataset.k;
      const v = this._num("sensor", k, k === "charging_power" ? 1 : 0);
      let text = "–";
      if (v) {
        if (k === "estimated_full_charge_time" && (v.unit === "min" || v.unit === "")) {
          const m = Math.round(v.n);
          text = m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m} min`;
        } else {
          text = `${v.text} ${v.unit}`.trim();
        }
      }
      el.querySelector("b").textContent = text;
      el.hidden = !this._has(this._id("sensor", k));
    });
  }

  // ---------- Climate section ----------
  _buildClimate(helpers, body) {
    const id = (d, k) => this._id(d, k);
    const climateId = id("climate", "climate");
    if (this._has(climateId)) {
      const wrap = document.createElement("div");
      wrap.className = "zk-thermo";
      const thermo = {
        type: "thermostat", entity: climateId, name: " ",
        features: [{ type: "climate-hvac-modes", hvac_modes: ["heat_cool", "off"], style: "icons" }],
      };
      this._addCard(helpers, wrap, thermo);
      const corners = [
        ["tl", "button", "rapid_cooling", "mdi:snowflake", "Rapid cool"],
        ["tr", "button", "rapid_heating", "mdi:fire", "Rapid heat"],
        ["bl", "switch", "steering_wheel_heating", "mdi:steering", "Wheel"],
        ["br", "switch", "windshield_defrost", "mdi:car-defrost-front", "Defrost"],
        ["mid", "switch", "departure_climate", "mdi:car-clock", "Pre"],
      ];
      this._corners = [];
      for (const [pos, domain, key, icon, label] of corners) {
        const eid = id(domain, key);
        if (!this._has(eid)) continue;
        const b = document.createElement("button");
        b.className = `zk-corner ${pos} ${domain}`;
        b.title = label;
        b.innerHTML = `<ha-icon icon="${icon}"></ha-icon><span>${label}</span>`;
        b.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (domain === "button") this._call("button", "press", eid);
          else this._call("switch", "toggle", eid);
          b.classList.add("pressed");
          setTimeout(() => b.classList.remove("pressed"), 600);
        });
        b.addEventListener("contextmenu", (ev) => {
          ev.preventDefault();
          this._moreInfo(eid);
        });
        wrap.appendChild(b);
        this._corners.push({ b, domain, eid });
      }
      const runId = id("number", "climate_run_duration");
      if (this._has(runId)) {
        const run = document.createElement("div");
        run.className = "zk-run";
        run.innerHTML = `<button class="m" aria-label="Shorter">−</button>
          <div class="zk-run-v" title="Climate run time"><ha-icon icon="mdi:timer-outline"></ha-icon><b>–</b></div>
          <button class="p" aria-label="Longer">+</button>`;
        const step = (dir) => {
          const st = this._hass.states[runId];
          if (!st) return;
          const a = st.attributes;
          let v = parseFloat(st.state) + dir * (Number(a.step) || 1);
          if (a.min !== undefined) v = Math.max(Number(a.min), v);
          if (a.max !== undefined) v = Math.min(Number(a.max), v);
          this._hass.callService("number", "set_value", { entity_id: runId, value: v });
        };
        run.querySelector(".m").addEventListener("click", (ev) => { ev.stopPropagation(); step(-1); });
        run.querySelector(".p").addEventListener("click", (ev) => { ev.stopPropagation(); step(1); });
        run.querySelector(".zk-run-v").addEventListener("click", (ev) => { ev.stopPropagation(); this._moreInfo(runId); });
        wrap.appendChild(run);
        this._run = { el: run, id: runId };
      }
      body.appendChild(wrap);
    }

    // Seats: 4 heated first, then 2 ventilated; segmented level buttons.
    const seatDefs = [
      ["seat_heating_driver", "Driver", "heat"],
      ["seat_heating_passenger", "Passenger", "heat"],
      ["seat_heating_rear_left", "Rear left", "heat"],
      ["seat_heating_rear_right", "Rear right", "heat"],
      ["seat_ventilation_driver", "Driver", "vent"],
      ["seat_ventilation_passenger", "Passenger", "vent"],
    ].map(([k, name, kind]) => ({ eid: id("select", k), name, kind })).filter((s) => this._has(s.eid));
    if (seatDefs.length) {
      const grid = document.createElement("div");
      grid.className = "zk-seats";
      this._seats = [];
      for (const s of seatDefs) {
        const el = document.createElement("div");
        el.className = `zk-seat ${s.kind}`;
        el.innerHTML = `<div class="zk-seat-h"><ha-icon></ha-icon><span>${s.name}</span></div><div class="zk-seg"></div>`;
        el.querySelector(".zk-seat-h").addEventListener("click", () => this._moreInfo(s.eid));
        grid.appendChild(el);
        this._seats.push({ ...s, el });
      }
      body.appendChild(grid);
    }

  }

  _updateSeats() {
    if (!this._seats || !this._hass) return;
    for (const s of this._seats) {
      const st = this._hass.states[s.eid];
      const opts = (st && st.attributes.options) || [];
      const seg = s.el.querySelector(".zk-seg");
      if (seg.dataset.opts !== JSON.stringify(opts)) {
        seg.innerHTML = "";
        opts.forEach((o, i) => {
          const b = document.createElement("button");
          const m = String(o).match(/\d+/);
          b.textContent = i === 0 ? "Off" : m ? m[0] : String(o);
          b.dataset.opt = o;
          b.addEventListener("click", () =>
            this._hass.callService("select", "select_option", { entity_id: s.eid, option: o }));
          seg.appendChild(b);
        });
        seg.dataset.opts = JSON.stringify(opts);
      }
      const val = st ? st.state : "";
      const on = !!st && opts.length > 0 && val !== opts[0] && val !== "unavailable" && val !== "unknown";
      s.el.classList.toggle("on", on);
      s.el.classList.toggle("na", !st || val === "unavailable");
      seg.querySelectorAll("button").forEach((b) => b.classList.toggle("sel", b.dataset.opt === val));
      const icon = s.kind === "heat" ? (on ? "mdi:fire" : "mdi:car-seat-heater") : (on ? "mdi:weather-windy" : "mdi:car-seat-cooler");
      const ic = s.el.querySelector("ha-icon");
      if (ic.getAttribute("icon") !== icon) ic.setAttribute("icon", icon);
    }
  }

  _updateCorners() {
    if (this._run && this._hass) {
      const st = this._hass.states[this._run.id];
      const v = st && parseFloat(st.state);
      this._run.el.querySelector("b").textContent = st && !isNaN(v) ? `${Math.round(v)} min` : "–";
    }
    if (!this._corners || !this._hass) return;
    for (const { b, domain, eid } of this._corners) {
      const st = this._hass.states[eid];
      b.classList.toggle("on", domain === "switch" && !!st && st.state === "on");
    }
  }

  _addCard(helpers, parent, conf) {
    const el = helpers.createCardElement(conf);
    this._children.push(el);
    if (this._hass) el.hass = this._hass;
    parent.appendChild(el);
    return el;
  }

  _buildActions() {
    const id = (d, k) => this._id(d, k);
    const defs = [
      { key: "lock", eid: id("lock", "door_lock"), icon: "mdi:lock", label: "Lock" },
      { key: "flash", eid: id("button", "flash_lights"), icon: "mdi:car-light-high", label: "Flash" },
      { key: "horn", eid: id("button", "horn_and_flash"), icon: "mdi:bullhorn-variant", label: "Horn" },
      { key: "sentry", eid: id("switch", "sentry_mode"), icon: "mdi:cctv", label: "Sentry" },
      { key: "refresh", eid: id("button", "refresh_now"), icon: "mdi:refresh", label: "Refresh" },
    ].filter((d) => this._has(d.eid));
    const row = document.createElement("div");
    row.className = "zk-actions";
    this._actions = [];
    for (const d of defs) {
      const b = document.createElement("button");
      b.className = `zk-act ${d.key}`;
      b.innerHTML = `<span class="zk-act-ic"><ha-icon icon="${d.icon}"></ha-icon></span><span class="zk-act-l">${d.label}</span>`;
      b.addEventListener("click", () => this._action(d, b));
      b.addEventListener("contextmenu", (ev) => {
        ev.preventDefault();
        this._moreInfo(d.eid);
      });
      row.appendChild(b);
      this._actions.push({ d, b });
    }
    return row;
  }

  _action(d, b) {
    const st = this._hass && this._hass.states[d.eid];
    if (d.key === "lock") {
      const locked = st && st.state === "locked";
      if (!window.confirm(locked ? "Unlock the car?" : "Lock the car?")) return;
      this._call("lock", locked ? "unlock" : "lock", d.eid);
    } else if (d.key === "sentry") {
      this._call("switch", "toggle", d.eid);
    } else if (d.key === "horn") {
      if (!window.confirm("Sound the horn?")) return;
      this._call("button", "press", d.eid);
    } else {
      this._call("button", "press", d.eid);
    }
    b.classList.remove("busy");
    void b.offsetWidth;
    b.classList.add("busy");
    setTimeout(() => b.classList.remove("busy"), d.key === "refresh" ? 1200 : 700);
  }

  _updateActions() {
    if (!this._actions || !this._hass) return;
    for (const { d, b } of this._actions) {
      const st = this._hass.states[d.eid];
      const s = st ? st.state : "";
      if (d.key === "lock") {
        const locked = s === "locked";
        b.classList.toggle("ok", locked);
        b.classList.toggle("warn", s === "unlocked" || s === "open");
        b.querySelector("ha-icon").setAttribute("icon", locked ? "mdi:lock" : "mdi:lock-open-variant");
        b.querySelector(".zk-act-l").textContent = locked ? "Locked" : s === "unlocked" ? "Unlocked" : "Lock";
      } else if (d.key === "sentry") {
        b.classList.toggle("on", s === "on");
      }
      b.classList.toggle("na", s === "unavailable");
    }
  }

  async _build() {
    const token = (this._buildToken = {});
    this._builtFor = this._config;
    const helpers = await window.loadCardHelpers();
    if (token !== this._buildToken) return;
    this._children = [];

    const root = document.createElement("div");
    root.className = "zeekr-card";
    const style = document.createElement("style");
    style.textContent = `
      .zeekr-card { display: flex; flex-direction: column; gap: 8px; }
      .zk-hero { display: flex; flex-direction: column; gap: 12px; padding: 14px 16px;
        background: var(--ha-card-background, var(--card-background-color));
        border-radius: var(--ha-card-border-radius, 12px);
        border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color)); }
      .zk-main { min-width: 0; cursor: pointer; display: flex; flex-direction: column; gap: 8px; }
      .zk-soc-row { display: flex; align-items: baseline; gap: 4px; flex-wrap: wrap; }
      .zk-soc { font-size: 44px; line-height: 1; font-weight: 500; color: var(--primary-text-color); letter-spacing: -1px; }
      .zk-soc-unit { font-size: 18px; color: var(--secondary-text-color); margin-right: 8px; }
      .zk-pill { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; padding: 3px 9px; border-radius: 999px;
        background: var(--secondary-background-color); color: var(--secondary-text-color); align-self: center; }
      .zk-pill ha-icon { --mdc-icon-size: 14px; }
      .zk-pill.on { background: rgba(67, 160, 71, 0.18); color: var(--success-color, #43a047); }
      .zk-bar { position: relative; height: 10px; border-radius: 999px; background: var(--secondary-background-color); overflow: hidden; }
      .zk-fill { height: 100%; border-radius: 999px; transition: width .6s ease, background-color .3s; }
      .zk-main.charging .zk-fill { background-image: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.4), rgba(255,255,255,0));
        background-size: 60px 100%; background-repeat: no-repeat; animation: zk-flow 1.6s linear infinite; }
      @keyframes zk-flow { from { background-position: -60px 0; } to { background-position: calc(100% + 60px) 0; } }
      .zk-limit { position: absolute; top: 0; bottom: 0; width: 2px; background: var(--primary-text-color); opacity: .45; }
      .zk-range { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--secondary-text-color); }
      .zk-range ha-icon { --mdc-icon-size: 16px; }
      .zk-chips { display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); grid-auto-flow: column; gap: 6px; }
      .zk-chip { display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center;
        padding: 8px 4px; border-radius: 10px; background: var(--secondary-background-color); cursor: pointer; min-width: 0; }
      .zk-chip ha-icon { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--primary-color)); }
      .zk-chip .v { font-size: 13px; font-weight: 500; max-width: 100%; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .zk-chip .l { font-size: 11px; color: var(--secondary-text-color); }
      .zk-carwrap { position: relative; }
      .zk-open { position: absolute; top: 10px; left: 10px; z-index: 2; display: flex; align-items: center; gap: 6px; max-width: 70%;
        padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 500; color: #fff;
        background: rgba(229, 57, 53, 0.92); box-shadow: 0 0 12px rgba(229, 57, 53, 0.5); }
      .zk-open ha-icon { --mdc-icon-size: 16px; flex: none; }
      .zk-open span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .zk-open[hidden], .zk-pill[hidden], .zk-limit[hidden], .zk-chip[hidden] { display: none; }
      .zk-live { display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); grid-auto-flow: column; gap: 6px; padding: 0 12px; }
      .zk-live > div { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 8px 4px; border-radius: 10px;
        background: var(--secondary-background-color); cursor: pointer; min-width: 0; text-align: center; }
      .zk-live ha-icon { --mdc-icon-size: 18px; color: var(--success-color, #43a047); }
      .zk-live.idle ha-icon { color: var(--secondary-text-color); }
      .zk-live b { font-size: 13px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
      .zk-live span { font-size: 11px; color: var(--secondary-text-color); }
      .zk-live > div[hidden] { display: none; }
      .zk-thermo { position: relative; }
      .zk-corner { position: absolute; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 2px;
        width: 64px; padding: 8px 4px; border: none; border-radius: 14px; cursor: pointer; font: inherit;
        background: var(--secondary-background-color); color: var(--primary-text-color); transition: transform .15s, background .2s; }
      .zk-corner ha-icon { --mdc-icon-size: 22px; }
      .zk-corner span { font-size: 11px; color: var(--secondary-text-color); }
      .zk-corner.tl { top: 10px; left: 12px; } .zk-corner.tr { top: 10px; right: 12px; }
      .zk-corner.bl { bottom: 64px; left: 12px; } .zk-corner.br { bottom: 64px; right: 12px; }
      .zk-corner.tl ha-icon { color: #4fc3f7; } .zk-corner.tr ha-icon { color: #ff7043; }
      .zk-corner.switch.on { background: rgba(255, 112, 67, 0.2); }
      .zk-corner.switch.on ha-icon { color: #ff7043; }
      .zk-corner.pressed { transform: scale(0.92); }
      .zk-odo { align-items: stretch; gap: 4px; }
      .zk-odo-line { display: flex; align-items: center; justify-content: center; gap: 4px; min-width: 0; }
      .zk-odo-line ha-icon { --mdc-icon-size: 15px; flex: none; }
      .zk-odo-line .v, .zk-odo-line .v2 { font-size: 12px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .zk-odo-line .v2 { color: var(--secondary-text-color); font-weight: 400; }
      .zk-odo-line[hidden] { display: none; }
      .zk-actions { display: flex; justify-content: space-between; gap: 6px; padding: 10px 12px;
        background: var(--ha-card-background, var(--card-background-color)); border-radius: var(--ha-card-border-radius, 12px);
        border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color)); }
      .zk-act { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; background: none; border: none;
        padding: 2px 0; cursor: pointer; font: inherit; color: var(--secondary-text-color); min-width: 0; }
      .zk-act-ic { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
        background: var(--secondary-background-color); color: var(--primary-text-color); transition: background .25s, color .25s, transform .15s, box-shadow .25s; }
      .zk-act-ic ha-icon { --mdc-icon-size: 22px; }
      .zk-act-l { font-size: 11px; white-space: nowrap; }
      .zk-act:hover .zk-act-ic { transform: translateY(-1px); }
      .zk-act:active .zk-act-ic { transform: scale(0.92); }
      .zk-act.ok .zk-act-ic { background: rgba(67, 160, 71, 0.18); color: var(--success-color, #43a047); }
      .zk-act.warn .zk-act-ic { background: rgba(249, 168, 37, 0.2); color: var(--warning-color, #f9a825); }
      .zk-act.on .zk-act-ic { background: rgba(229, 57, 53, 0.18); color: var(--error-color, #e53935); box-shadow: 0 0 10px rgba(229, 57, 53, 0.35); }
      .zk-act.na { opacity: 0.4; }
      .zk-act.busy .zk-act-ic { box-shadow: 0 0 0 3px var(--primary-color); }
      .zk-act.refresh.busy ha-icon { animation: zk-spin 1s linear; }
      .zk-act.flash.busy .zk-act-ic { background: rgba(255, 213, 79, 0.3); color: #ffd54f; }
      @keyframes zk-spin { to { transform: rotate(360deg); } }
      .zk-corner.tc { top: 10px; left: 50%; transform: translateX(-50%); }
      .zk-corner.tc.pressed { transform: translateX(-50%) scale(0.92); }
      .zk-hero { position: relative; }
      .zk-extras { margin-left: auto; align-self: center; display: flex; gap: 6px; }
      .zk-extras[hidden] { display: none; }
      .zk-extra { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; padding: 2px 8px; border-radius: 999px;
        background: var(--secondary-background-color); color: var(--primary-text-color); cursor: pointer; }
      .zk-extra ha-icon { --mdc-icon-size: 14px; color: var(--secondary-text-color); }
      .zk-extra b { font-weight: 500; }
      .zk-extra.na { opacity: .45; }
      .zk-pill.armed { background: rgba(249, 168, 37, 0.18); color: var(--warning-color, #f9a825); }
      .zk-ov { position: absolute; z-index: 2; display: flex; align-items: center; gap: 4px; cursor: pointer;
        font-size: 12px; color: var(--primary-text-color); transform: translate(-50%, -50%); white-space: nowrap; }
      .zk-ov[hidden], .zk-ov [hidden] { display: none !important; }
      .zk-ov ha-icon { --mdc-icon-size: 15px; color: var(--secondary-text-color); }
      .zk-ov b { font-weight: 500; }
      .zk-ov-temp { padding: 3px 9px; border-radius: 999px; background: rgba(0, 0, 0, 0.45); color: #fff; backdrop-filter: blur(4px); }
      .zk-ov-temp ha-icon { color: #ffb74d; }
      .zk-ov-odo { flex-direction: column; align-items: flex-end; gap: 2px; transform: translate(-50%, -50%); }
      .zk-ov-odo > div { display: flex; align-items: center; gap: 4px; }
      .zk-ov-odo > div + div b { font-weight: 400; color: var(--secondary-text-color); }
      .zk-ov-upd { top: 12px; right: 10px; transform: none; font-size: 11px; color: var(--secondary-text-color); }
      .zk-corner.mid { top: 47%; left: 24%; transform: translate(-50%, -50%); flex-direction: row; width: auto; gap: 6px;
        padding: 5px 12px; border-radius: 999px; }
      .zk-corner.mid span { font-size: 12px; }
      .zk-corner.mid ha-icon { --mdc-icon-size: 18px; }
      .zk-corner.mid.pressed { transform: translate(-50%, -50%) scale(0.94); }
      .zk-sched { display: flex; align-items: center; gap: 8px; margin: 0 12px; padding: 6px; border-radius: 12px;
        background: var(--secondary-background-color); }
      .zk-sched button { font: inherit; border: none; cursor: pointer; color: var(--primary-text-color); }
      .zk-sched-tg { display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px;
        background: var(--ha-card-background, var(--card-background-color)); color: var(--secondary-text-color) !important; font-size: 13px; }
      .zk-sched-tg ha-icon { --mdc-icon-size: 18px; }
      .zk-sched.on .zk-sched-tg { background: rgba(67, 160, 71, 0.2); color: var(--success-color, #43a047) !important; }
      .zk-sched-t { flex: 1; padding: 6px 4px; border-radius: 8px; background: none; font-size: 16px; text-align: center; }
      .zk-sched-t b { font-weight: 500; }
      .zk-sched:not(.on) .zk-sched-t { color: var(--secondary-text-color) !important; }
      .zk-sched-arrow { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
      .zk-ctrl { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 12px; }
      .zk-ctrl-item { flex: 1 1 0; min-width: 0; display: flex; align-items: center; gap: 4px; height: 40px; padding: 0 6px 0 10px;
        border-radius: 12px; background: var(--secondary-background-color); color: var(--primary-text-color); }
      .zk-ctrl-item.sel { flex: 1 1 100%; }
      .zk-ctrl-item ha-icon { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--primary-color)); flex: none; cursor: pointer; }
      .zk-ctrl-item b { flex: 1; text-align: center; font-size: 14px; font-weight: 500; white-space: nowrap; }
      .zk-ctrl-item button { width: 28px; height: 28px; flex: none; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; line-height: 1;
        background: var(--ha-card-background, var(--card-background-color)); color: var(--primary-text-color); }
      .zk-ctrl-item button:disabled { opacity: .35; cursor: default; }
      .zk-ctrl-item select { flex: 1; min-width: 0; height: 32px; border: none; border-radius: 8px; padding: 0 8px; font: inherit; font-size: 14px;
        background: var(--ha-card-background, var(--card-background-color)); color: var(--primary-text-color); cursor: pointer; }
      .zk-ctrl-item.na { opacity: .45; }
      .zk-seats { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin: 0 12px; }
      .zk-seat { display: flex; flex-direction: column; gap: 6px; padding: 8px; border-radius: 12px; background: var(--secondary-background-color); }
      .zk-seat-h { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--primary-text-color); cursor: pointer; }
      .zk-seat-h ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); transition: color .2s; }
      .zk-seat.heat.on .zk-seat-h ha-icon { color: #ff7043; }
      .zk-seat.vent.on .zk-seat-h ha-icon { color: #4fc3f7; }
      .zk-seg { display: flex; gap: 3px; padding: 3px; border-radius: 9px; background: var(--ha-card-background, var(--card-background-color)); }
      .zk-seg button { flex: 1; height: 26px; border: none; border-radius: 7px; background: none; cursor: pointer;
        font: inherit; font-size: 12px; color: var(--secondary-text-color); transition: background .2s, color .2s; }
      .zk-seg button.sel { background: var(--secondary-background-color); color: var(--primary-text-color); font-weight: 500; }
      .zk-seat.heat.on .zk-seg button.sel { background: rgba(255, 112, 67, 0.25); color: #ff7043; }
      .zk-seat.vent.on .zk-seg button.sel { background: rgba(79, 195, 247, 0.22); color: #4fc3f7; }
      .zk-seat.na { opacity: .45; }
      .zk-range-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .zk-cpow { display: inline-flex; align-items: center; gap: 4px; font-size: 13px; padding: 3px 10px; border-radius: 999px; cursor: pointer;
        background: var(--secondary-background-color); color: var(--secondary-text-color); }
      .zk-cpow ha-icon { --mdc-icon-size: 16px; }
      .zk-cpow b { font-weight: 500; }
      .zk-cpow.on { background: rgba(67, 160, 71, 0.18); color: var(--success-color, #43a047); }
      .zk-cpow[hidden] { display: none; }
      .zk-run { position: absolute; z-index: 2; top: 47%; left: 77%; transform: translate(-50%, -50%);
        display: flex; flex-direction: column; align-items: center; gap: 2px; }
      .zk-run button { width: 30px; height: 24px; border: none; border-radius: 8px; cursor: pointer; font: inherit; font-size: 16px; line-height: 1;
        background: var(--secondary-background-color); color: var(--primary-text-color); }
      .zk-run-v { display: flex; align-items: center; gap: 3px; font-size: 12px; color: var(--primary-text-color); cursor: pointer; white-space: nowrap; }
      .zk-run-v ha-icon { --mdc-icon-size: 14px; color: var(--secondary-text-color); }
      .zk-run-v b { font-weight: 500; }
      .zk-offgrid { background: rgba(249, 168, 37, 0.18); color: var(--warning-color, #f9a825); }
      .zk-offgrid ha-icon { color: var(--warning-color, #f9a825) !important; }
      .zk-extra[hidden] { display: none; }
      .zk-ctrl[hidden] { display: none; }
      .zk-ctrl-offgrid { display: flex; align-items: center; gap: 8px; margin: 0 12px; padding: 10px 12px; border-radius: 12px;
        background: rgba(249, 168, 37, 0.14); color: var(--warning-color, #f9a825); font-size: 13px; }
      .zk-ctrl-offgrid ha-icon { --mdc-icon-size: 18px; }
      .zk-ctrl-offgrid b { font-weight: 500; }
      .zk-ctrl-offgrid[hidden] { display: none; }
      .zk-car { --ha-card-background: transparent; --card-background-color: transparent;
        --ha-card-box-shadow: none; --ha-card-border-width: 0; }
      .zk-section { border-radius: var(--ha-card-border-radius, 12px); overflow: hidden;
        background: var(--ha-card-background, var(--card-background-color)); }
      .zk-head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; cursor: pointer;
        font-size: 16px; font-weight: 500; color: var(--primary-text-color); user-select: none; }
      .zk-head ha-icon.chev { margin-left: auto; transition: transform .2s; }
      .zk-section.open .zk-head ha-icon.chev { transform: rotate(180deg); }
      .zk-body { display: none; padding: 0 0 8px; }
      .zk-section.open .zk-body { display: flex; flex-direction: column; gap: 8px; }
      .zk-body > * { --ha-card-box-shadow: none; --ha-card-border-width: 0; }
    `;
    root.appendChild(style);

    const icons = { Charging: "mdi:ev-station", Climate: "mdi:thermostat" };
    for (const conf of this._cardConfigs()) {
      if (conf.type === "zeekr-header") {
        root.appendChild(this._makeHeader());
      } else if (conf.type === "zeekr-actions") {
        root.appendChild(this._buildActions());
      } else if (conf.type === "custom:expander-card") {
        const sec = document.createElement("div");
        sec.className = "zk-section";
        const key = (conf.title || "").toLowerCase() + "_open";
        if (this._config[key]) sec.classList.add("open");
        const head = document.createElement("div");
        head.className = "zk-head";
        head.innerHTML = `<ha-icon icon="${icons[conf.title] || "mdi:chevron-right"}"></ha-icon>
          <span>${conf.title || ""}</span><ha-icon class="chev" icon="mdi:chevron-down"></ha-icon>`;
        head.addEventListener("click", () => sec.classList.toggle("open"));
        const body = document.createElement("div");
        body.className = "zk-body";
        if (conf.title === "Charging") {
          this._buildCharging(helpers, body);
        } else if (conf.title === "Climate") {
          this._buildClimate(helpers, body);
        } else {
          for (const inner of conf.cards || []) this._addCard(helpers, body, inner);
        }
        sec.append(head, body);
        root.appendChild(sec);
      } else {
        const el = helpers.createCardElement(conf);
        this._children.push(el);
        if (conf.type === "picture-elements") {
          el.classList.add("zk-car");
          const wrap = document.createElement("div");
          wrap.className = "zk-carwrap";
          const pill = document.createElement("div");
          pill.className = "zk-open";
          pill.hidden = true;
          pill.innerHTML = `<ha-icon icon="mdi:alert-circle"></ha-icon><span></span>`;
          this._openPill = pill;
          wrap.append(el, pill);
          this._makeOverlays(wrap);
          root.appendChild(wrap);
        } else {
          root.appendChild(el);
        }
      }
    }

    if (this._hass) this._children.forEach((c) => (c.hass = this._hass));
    this.innerHTML = "";
    this.appendChild(root);
    this._updateHeader();
    this._updateOpen();
    this._updateLive();
    this._updateCorners();
    this._updateActions();
    this._updateOverlays();
    this._updateSched();
    this._updateCtrls();
    this._updateSeats();
  }
}

if (!customElements.get("zeekr-card")) {
  customElements.define("zeekr-card", ZeekrCard);
}
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "zeekr-card")) {
  window.customCards.push({
    type: "zeekr-card",
    name: "Zeekr card",
    description: "Zeekr 001 car card: doors, windows, trunk, charge port, charging and climate.",
    preview: false,
    documentationURL: "https://github.com/denveronly/zeekr-ha-custom-card",
  });
}
console.info(`%c ZEEKR-CARD %c ${ZEEKR_CARD_VERSION} `, "color:white;background:#3a3a3a", "color:#3a3a3a;background:#ddd");
