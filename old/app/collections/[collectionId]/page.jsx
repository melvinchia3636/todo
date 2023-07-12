'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PocketBase from 'pocketbase';
import TaskItemListContainer from '../../components/taskList/TaskItemListContainer';

async function getTasks(collectionId) {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collection = (await client.collection('collections').getOne(collectionId)).export();
  const tasks = (await client.collection('tasks').getList(1, 50, {
    filter: `collection = "${collectionId}"`,
  })).items.map((e) => e.export());

  return {
    collection,
    tasks,
  };
}

async function page({ params }) {
  const { collection, tasks } = await getTasks(params.collectionId);

  return <TaskItemListContainer collection={collection} tasks={tasks} />;
}

export default page;
