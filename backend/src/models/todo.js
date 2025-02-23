'use strict';

const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    priority: {
      type: String,
      enum: {
        values: ['low', 'medium', 'high'],
        message: 'Priority must be low, medium or high!',
      },
      default: 'medium',
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date, // Tarih alanı eklendi
      required: true,
    },
  },
  {
    collection: 'todos',
    timestamps: true,
  }
);

todoSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = model('Todo', todoSchema);
