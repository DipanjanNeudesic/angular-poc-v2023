import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {lastValueFrom} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(httpBack: HttpBackend) {
    this.http = new HttpClient(httpBack);
  }
  private static config: Record<string, any> = {};
  private http: HttpClient;

  /**
   * @summary Gets config value based on the Key
   * @param key Key of config value to pull
   */
  public static get(key: string): any {
    const val = AppConfigService.config[key];
    return typeof val === 'object' ? JSON.parse(JSON.stringify(val)) : val;
  }

  /**
   * @summary For use in App Module ONLY
   */
  public load(): Promise<void> {
    const {configFilePath} = environment;
    const cacheBusterParam = new Date().getTime();
    
    // Remove after testing, this statement is only for debugging
    console.log(`Loading config file -> ${configFilePath}`)
    
    const jsonFile = `${configFilePath}?nocache=${cacheBusterParam}`;
    return new Promise<void>((resolve, reject) => {

      var obs= this.http
      .get(jsonFile)
      
        lastValueFrom(obs)
        .then((response: Record<string, any>) => {
          AppConfigService.config = response;
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
          );
        });
    });
  }
}
