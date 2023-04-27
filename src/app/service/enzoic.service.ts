import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { CryptoJS } from 'crypto-js';
import { SHA256 } from 'crypto-js';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EnzoicService {

  private readonly API_URL = 'https://api.enzoic.com';
  private readonly API_KEY = '4474ceceaa054ea7bc735962373159ce'
  constructor(private http: HttpClient) { }

  checkPassword(password: string) {
    const hash = SHA256(password)
    const partial_hash = hash.toString(CryptoJS.enc.Hex).substring(0,10)
    const url = `${this.API_URL}/passwords`;
    const headers = { 'Api-Key': this.API_KEY };
    const body = { password };
    // return this.http.post(url, body, { headers })
    return this.http.get(url, {
      headers: headers,
      params: {
        partial_sha256: hash.toString(CryptoJS.enc.Hex).substring(0, 10)
      }
    })
  }
}
