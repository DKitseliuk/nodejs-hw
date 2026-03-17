// src/controllers/notesController.js

import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search } = req.query;

  const skip = (page - 1) * perPage;

  const notesQuery = Note.find({ userId: req.user._id });

  if (tag) {
    notesQuery.where('tag').equals(tag);
  }

  if (search) {
    notesQuery.where({ $text: { $search: search } });
  }

  const [totalNotes, notes] = await Promise.all([
    notesQuery.clone().countDocuments(),
    notesQuery.skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(totalNotes / perPage);

  return res.status(200).json({
    page,
    perPage,
    totalNotes,
    totalPages,
    notes,
  });
};

const getNoteById = async (req, res) => {
  const note = await Note.findOne({
    _id: req.params.noteId,
    userId: req.user._id,
  });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  return res.status(200).json(note);
};

const createNote = async (req, res) => {
  const note = await Note.create({ ...req.body, userId: req.user._id });
  return res.status(201).json(note);
};

const updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    {
      _id: req.params.noteId,
      userId: req.user._id,
    },
    req.body,
    {
      returnDocument: 'after',
    },
  );

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  return res.status(200).json(note);
};

const deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({
    _id: req.params.noteId,
    userId: req.user._id,
  });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  return res.status(200).json(note);
};

export { getAllNotes, getNoteById, createNote, updateNote, deleteNote };
