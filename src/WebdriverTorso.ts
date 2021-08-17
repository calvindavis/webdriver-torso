import DefaultWebdriverTorsoSettings from "./DefaultWebdriverTorsoSettings";
import WebdriverTorsoSettings from "./WebdriverTorsoSettings";

export default class WebdriverTorso {
  private readonly _settings: WebdriverTorsoSettings;
  private readonly _canvas: HTMLCanvasElement;
  private readonly _ctx: CanvasRenderingContext2D;

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  constructor(settings: WebdriverTorsoSettings = null) {
    this._settings = Object.assign({}, DefaultWebdriverTorsoSettings, settings);
    console.log("webdriver-torso", this._settings);

    this._canvas = document.createElement("canvas");
    this._ctx = this._canvas.getContext("2d");

    if (this._settings.parent) {
      this._settings.parent.appendChild(this._canvas);
    }

    this._render();
  }

  private _render(): void {
    const colors = this._settings.colors;
    const canvas = this._canvas;
    const ctx = this._ctx;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < colors.length; i += 1) {
      ctx.fillStyle = colors[i];
      ctx.fillRect(i * 20, 0, 20, 20);
    }
  }
}
