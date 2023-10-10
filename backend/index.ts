import express, { Express, Request, Response } from "express"
import bodyParser from "body-parser"
import createError from "http-errors"
import morgan from "morgan"
import dotenv from "dotenv"
import { _printError } from "./utils/ErrorFormatter.js"

// const er = new Error("Random error")

// _printError(er)

console.log("omkie")