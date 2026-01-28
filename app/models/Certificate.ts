'use server'

import { models, Schema, model } from "mongoose";

const CertificateSchema = new Schema({
  title: {
    type: String
  },
  issuer: {
    type: String
  },
  date: {
    type: String
  },
  id: {
    type: String
  },
  link: {
    type: String
  },
  skills: {
    type: String
  },
  certificateId: {
    type: String
  }
})

const Certificate = models.Certificate || model("Certificate", CertificateSchema);

export default Certificate;
