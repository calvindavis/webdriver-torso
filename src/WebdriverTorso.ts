import DefaultWebdriverTorsoSettings from "./DefaultWebdriverTorsoSettings";
import WebdriverTorsoSettings from "./WebdriverTorsoSettings";

export default class WebdriverTorso {
  private readonly _settings: WebdriverTorsoSettings;

  constructor(settings: WebdriverTorsoSettings = null) {
    this._settings = Object.assign({}, DefaultWebdriverTorsoSettings, settings);
    console.log("webdriver-torso", this._settings);
  }
}
