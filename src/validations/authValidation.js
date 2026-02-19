// src/validations/authValidation.js

import { Joi, Segments } from 'celebrate';

const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required().messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be valid',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(8).required().messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have at least {#limit} characters',
      'any.required': 'Password is required',
    }),
  }),
};

const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required().messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be valid',
      'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
  }),
};

const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required().messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be valid',
      'any.required': 'Email is required',
    }),
  }),
};

const resetPasswordSchema = {
  [Segments.BODY]: Joi.object({
    password: Joi.string().min(8).required().messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have at least {#limit} characters',
      'any.required': 'Password is required',
    }),
    token: Joi.string().required().messages({
      'string.base': 'Token must be a string',
      'string.empty': 'Token cannot be empty',
      'any.required': 'Token is required',
    }),
  }),
};

export {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
};
