/*
 * Zeekr card for Home Assistant
 * https://github.com/denveronly/zeekr-ha-custom-card
 *
 * type: custom:zeekr-card
 * prefix: zeekr_001_            # your entity prefix (required)
 * layout: top                   # top (default) or side
 * image: /local/my_car.png     # optional; top layout defaults to the bundled image
 * charging_open: false          # start with the Charging section expanded
 * climate_open: false           # start with the Climate section expanded
 */
const ZEEKR_CARD_VERSION = "1.4.0";

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
     "entity": "button.CAR_refresh_now",
     "name": "Refresh",
     "icon": "mdi:refresh",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_refresh_now"
      }
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
     "entity": "button.CAR_refresh_now",
     "name": "Refresh",
     "icon": "mdi:refresh",
     "tap_action": {
      "action": "perform-action",
      "perform_action": "button.press",
      "target": {
       "entity_id": "button.CAR_refresh_now"
      }
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

  _makeHeader() {
    const hero = document.createElement("div");
    hero.className = "zk-hero";
    hero.innerHTML = `
      <div class="zk-main" data-more="sensor:battery_level">
        <div class="zk-soc-row">
          <span class="zk-soc">–</span><span class="zk-soc-unit">%</span>
          <span class="zk-pill zk-charge" hidden><ha-icon icon="mdi:lightning-bolt"></ha-icon><span></span></span>
        </div>
        <div class="zk-bar"><div class="zk-fill"></div><div class="zk-limit" hidden></div></div>
        <div class="zk-range" data-more="sensor:range"><ha-icon icon="mdi:map-marker-distance"></ha-icon><span>–</span></div>
      </div>
      <div class="zk-chips">
        <div class="zk-chip" data-more="sensor:interior_temperature"><ha-icon icon="mdi:car-seat"></ha-icon><span class="v">–</span><span class="l">Inside</span></div>
        <div class="zk-chip" data-more="sensor:odometer"><ha-icon icon="mdi:counter"></ha-icon><span class="v">–</span><span class="l">Odometer</span></div>
        <div class="zk-chip" data-more="sensor:last_status_report"><ha-icon icon="mdi:access-point"></ha-icon><span class="v">–</span><span class="l">Updated</span></div>
      </div>`;
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

    const charging = this._st("binary_sensor", "charging");
    const plugged = this._st("binary_sensor", "charger_plugged_in");
    const pill = h.querySelector(".zk-charge");
    const isCharging = !!charging && charging.state === "on";
    const isPlugged = !!plugged && plugged.state === "on";
    if (isCharging || isPlugged) {
      const pw = this._num("sensor", "charging_power", 1);
      pill.hidden = false;
      pill.classList.toggle("on", isCharging);
      pill.querySelector("span").textContent = isCharging
        ? (pw && pw.n > 0 ? `Charging · ${pw.text} ${pw.unit}` : "Charging")
        : "Plugged in";
      pill.querySelector("ha-icon").setAttribute("icon", isCharging ? "mdi:lightning-bolt" : "mdi:power-plug");
    } else pill.hidden = true;
    h.querySelector(".zk-main").classList.toggle("charging", isCharging);

    const chips = h.querySelectorAll(".zk-chip .v");
    const tIn = this._num("sensor", "interior_temperature", 1);
    const odo = this._num("sensor", "odometer", 0);
    chips[0].textContent = tIn ? `${tIn.text}°` : "–";
    chips[1].textContent = odo ? `${odo.text} ${odo.unit || "km"}` : "–";
    const rep = this._st("sensor", "last_status_report");
    chips[2].textContent = (rep && this._ago(rep.state)) || "–";
    h.querySelectorAll(".zk-chip").forEach((c) => {
      c.hidden = c.querySelector(".v").textContent === "–";
    });
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

    const sched = this._prune({
      type: "grid", columns: 3, square: false,
      cards: [
        { type: "tile", entity: id("switch", "charging_schedule"), name: "Schedule", icon: "mdi:calendar-clock",
          vertical: true, tap_action: { action: "toggle" }, icon_tap_action: { action: "toggle" } },
        { type: "tile", entity: id("time", "charging_start_time"), name: "Start", icon: "mdi:clock-start", vertical: true },
        { type: "tile", entity: id("time", "charging_end_time"), name: "End", icon: "mdi:clock-end", vertical: true },
      ],
    });
    if (sched) this._addCard(helpers, body, sched);
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
      body.appendChild(wrap);
    }

    const seats = this._prune({
      type: "grid", columns: 2, square: false,
      cards: [
        ["select", "seat_heating_driver", "Driver heat", "mdi:car-seat-heater"],
        ["select", "seat_heating_passenger", "Passenger heat", "mdi:car-seat-heater"],
        ["select", "seat_ventilation_driver", "Driver vent", "mdi:car-seat-cooler"],
        ["select", "seat_ventilation_passenger", "Passenger vent", "mdi:car-seat-cooler"],
        ["select", "seat_heating_rear_left", "Rear left heat", "mdi:car-seat-heater"],
        ["select", "seat_heating_rear_right", "Rear right heat", "mdi:car-seat-heater"],
      ].map(([d, k, name, icon]) => ({
        type: "tile", entity: id(d, k), name, icon, features: [{ type: "select-options" }],
      })),
    });
    if (seats) this._addCard(helpers, body, seats);

    const rest = this._prune({
      type: "entities",
      entities: [
        { entity: id("number", "climate_run_duration"), name: "Climate run time" },
        { type: "section", label: "Departure" },
        { entity: id("switch", "departure_schedule"), name: "Departure schedule" },
        { entity: id("datetime", "scheduled_departure_time"), name: "Departure time" },
        { entity: id("switch", "departure_climate"), name: "Pre-condition" },
      ],
    });
    if (rest && rest.entities.some((e) => e.entity)) {
      rest.entities = rest.entities.filter((e, i, a) => e.entity || (a[i + 1] && a[i + 1].entity));
      this._addCard(helpers, body, rest);
    }
  }

  _updateCorners() {
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
