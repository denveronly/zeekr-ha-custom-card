/*
 * Zeekr card for Home Assistant
 * https://github.com/denveronly/zeekr-ha-custom-card
 *
 * type: custom:zeekr-card
 * prefix: zeekr_001_            # your entity prefix (required)
 * layout: top                   # top (default) or side
 * image: /local/zeekr001_top.png  # optional, defaults per layout
 * charging_open: false          # start with the Charging section expanded
 * climate_open: false           # start with the Climate section expanded
 */
const ZEEKR_CARD_VERSION = "1.0.0";

const ZEEKR_TEMPLATES = {
 "top": [
  {
   "type": "grid",
   "columns": 4,
   "square": false,
   "cards": [
    {
     "type": "tile",
     "entity": "sensor.CAR_battery_level",
     "name": "Battery",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_range",
     "name": "Range",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_interior_temperature",
     "name": "Inside",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_odometer",
     "name": "Odometer",
     "vertical": true
    }
   ]
  },
  {
   "type": "conditional",
   "conditions": [
    {
     "condition": "or",
     "conditions": [
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_front_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_front_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_rear_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_rear_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_front_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_front_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_rear_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_rear_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_hood",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_trunk",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "lock.CAR_charge_port_lid",
       "state": "unlocked"
      }
     ]
    }
   ],
   "card": {
    "type": "markdown",
    "content": "<ha-alert alert-type=\"error\">Something is open: check the red marks on the car</ha-alert>"
   }
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
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "32%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_right",
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "68%",
      "top": "42%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_left",
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "32%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_right",
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "68%",
      "top": "61%"
     }
    },
    {
     "type": "state-icon",
     "entity": "cover.CAR_all_windows",
     "icon": "mdi:window-shutter",
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
     "entity": "sensor.CAR_tire_pressure_front_right",
     "style": {
      "left": "89%",
      "top": "22%",
      "font-size": "12px"
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
     "entity": "sensor.CAR_tire_pressure_rear_right",
     "style": {
      "left": "89%",
      "top": "90%",
      "font-size": "12px"
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
   "type": "grid",
   "columns": 4,
   "square": false,
   "cards": [
    {
     "type": "button",
     "entity": "lock.CAR_door_lock",
     "name": "Lock",
     "tap_action": {
      "action": "toggle",
      "confirmation": {
       "text": "Lock / unlock the car?"
      }
     }
    },
    {
     "type": "button",
     "entity": "button.CAR_flash_lights",
     "name": "Flash",
     "icon": "mdi:car-light-alert",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_flash_lights"
      }
     }
    },
    {
     "type": "button",
     "entity": "switch.CAR_sentry_mode",
     "name": "Sentry",
     "tap_action": {
      "action": "toggle"
     }
    },
    {
     "type": "button",
     "entity": "cover.CAR_sunshade",
     "name": "Sunshade",
     "tap_action": {
      "action": "toggle"
     }
    }
   ]
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
   "type": "grid",
   "columns": 4,
   "square": false,
   "cards": [
    {
     "type": "tile",
     "entity": "sensor.CAR_battery_level",
     "name": "Battery",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_range",
     "name": "Range",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_interior_temperature",
     "name": "Inside",
     "vertical": true
    },
    {
     "type": "tile",
     "entity": "sensor.CAR_odometer",
     "name": "Odometer",
     "vertical": true
    }
   ]
  },
  {
   "type": "conditional",
   "conditions": [
    {
     "condition": "or",
     "conditions": [
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_front_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_front_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_rear_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_door_rear_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_front_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_front_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_rear_left",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_window_rear_right",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_hood",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "binary_sensor.CAR_trunk",
       "state": "on"
      },
      {
       "condition": "state",
       "entity": "lock.CAR_charge_port_lid",
       "state": "unlocked"
      }
     ]
    }
   ],
   "card": {
    "type": "markdown",
    "content": "<ha-alert alert-type=\"error\">Something is open: check the red marks on the car</ha-alert>"
   }
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
     "icon": "mdi:car-door-lock",
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
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "63%",
      "top": "7%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_front_left",
     "icon": "mdi:car-door-lock",
     "style": {
      "left": "62%",
      "top": "37%"
     }
    },
    {
     "type": "state-icon",
     "entity": "binary_sensor.CAR_window_rear_left",
     "icon": "mdi:car-door-lock",
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
     "icon": "mdi:window-shutter",
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
     "entity": "sensor.CAR_tire_pressure_rear_left",
     "style": {
      "left": "91%",
      "top": "78%",
      "font-size": "12px"
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
       "icon": "mdi:car-door-lock",
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
   "type": "grid",
   "columns": 4,
   "square": false,
   "cards": [
    {
     "type": "button",
     "entity": "lock.CAR_door_lock",
     "name": "Lock",
     "tap_action": {
      "action": "toggle",
      "confirmation": {
       "text": "Lock / unlock the car?"
      }
     }
    },
    {
     "type": "button",
     "entity": "button.CAR_flash_lights",
     "name": "Flash",
     "icon": "mdi:car-light-alert",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_flash_lights"
      }
     }
    },
    {
     "type": "button",
     "entity": "switch.CAR_sentry_mode",
     "name": "Sentry",
     "tap_action": {
      "action": "toggle"
     }
    },
    {
     "type": "button",
     "entity": "cover.CAR_sunshade",
     "name": "Sunshade",
     "tap_action": {
      "action": "toggle"
     }
    }
   ]
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

const DEFAULT_IMAGES = {
  top: "/local/zeekr001_top.png",
  side: "/local/zeekr001_side.png",
};

class ZeekrCard extends HTMLElement {
  setConfig(config) {
    if (!config || !config.prefix) {
      throw new Error("Set 'prefix', e.g. prefix: zeekr_001_ (from sensor.zeekr_001_battery_level)");
    }
    const layout = config.layout || "top";
    if (!ZEEKR_TEMPLATES[layout]) {
      throw new Error("layout must be 'top' or 'side'");
    }
    this._config = { ...config, layout };
    this._built = false;
    this._build();
  }

  set hass(hass) {
    this._hass = hass;
    (this._children || []).forEach((c) => (c.hass = hass));
  }

  getCardSize() {
    return 14;
  }

  static getStubConfig() {
    return { prefix: "zeekr_001_", layout: "top" };
  }

  _cardConfigs() {
    const prefix = String(this._config.prefix).replace(/\.$/, "");
    const raw = JSON.stringify(ZEEKR_TEMPLATES[this._config.layout]).split("CAR_").join(prefix);
    const cards = JSON.parse(raw);
    const image = this._config.image || DEFAULT_IMAGES[this._config.layout];
    cards.forEach((c) => {
      if (c.type === "picture-elements") c.image = image;
    });
    return cards;
  }

  async _build() {
    const token = (this._buildToken = {});
    const helpers = await window.loadCardHelpers();
    if (token !== this._buildToken) return;
    this._children = [];

    const root = document.createElement("div");
    root.className = "zeekr-card";
    const style = document.createElement("style");
    style.textContent = `
      .zeekr-card { display: flex; flex-direction: column; gap: 8px; }
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
      if (conf.type === "custom:expander-card") {
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
        for (const inner of conf.cards || []) {
          const el = helpers.createCardElement(inner);
          this._children.push(el);
          body.appendChild(el);
        }
        sec.append(head, body);
        root.appendChild(sec);
      } else {
        const el = helpers.createCardElement(conf);
        this._children.push(el);
        root.appendChild(el);
      }
    }

    if (this._hass) this._children.forEach((c) => (c.hass = this._hass));
    this.innerHTML = "";
    this.appendChild(root);
    this._built = true;
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
