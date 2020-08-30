// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to detect anomaly points on entire series.
 */

import * as msRest from "@azure/ms-rest-js";
import { AnomalyDetectorClient, AnomalyDetectorModels } from "@azure/cognitiveservices-anomalydetector";
import * as fs from "fs";
import parse from "csv-parse/lib/sync";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set this environment variables or edit the following values
const apiKey = process.env["API_KEY"] || "";
const endpoint = process.env["ENDPOINT"] || "";
const timeSeriesDataPath = "../example-data/request-data.csv"

function read_series_from_file(path: string): Array<AnomalyDetectorModels.Point>{
  let result = Array<AnomalyDetectorModels.Point>();
  let input = fs.readFileSync(path).toString();
  let parsed = parse(input, {skip_empty_lines:true});
  parsed.forEach(function(e: Array<string>){
    result.push({timestamp:new Date(e[0]), value:Number(e[1])});
  });
  return result;
}

async function main() {
  // create credential
  const options: msRest.ApiKeyCredentialOptions = {
    inHeader: {
      "Ocp-Apim-Subscription-Key": apiKey
    }
  };

  // create client
  const client = new AnomalyDetectorClient(new msRest.ApiKeyCredentials(options), endpoint);

  // construct request
  const request: AnomalyDetectorModels.Request = {
    series: read_series_from_file(timeSeriesDataPath),
    granularity: "daily",
  }

  // get entire detect result
  client.entireDetect(request).then((result) => {
    if(result.isAnomaly.some(function(e){return e === true;})){
      console.log("Anomaly was detected from the series at index:");
      result.isAnomaly.forEach(function(e, i){
        if(e === true) console.log(i);
      });
    }else{
      console.log("There is no anomaly detected from the series.");
    }
  }).catch((err) => {
    if(err.body !== undefined){
      console.error("Error code: " + err.body.code);
      console.error("Error message: " + err.body.message);
    }else{
      console.error(err);
    }
  });
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
