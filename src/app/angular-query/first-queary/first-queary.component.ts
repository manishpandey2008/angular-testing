import { Component, inject } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { injectMutation, injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-first-queary',
  templateUrl: './first-queary.component.html',
  styleUrls: ['./first-queary.component.css']
})
export class FirstQuearyComponent {
  todoService = inject(TodoService)
  queryClient = injectQueryClient()

  query = injectQuery(() => ({
    queryKey: ['todos'],
    queryFn: () => this.todoService.getTodos(),
    staleTime: Infinity
  }))

  mutation = injectMutation((client: { invalidateQueries: (arg0: { queryKey: string[]; }) => void; }) => ({
    mutationFn: (todo: Todo) => this.todoService.addTodo(todo),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  }))

  onAddTodo() {
    this.mutation.mutate({
      id: Date.now().toString(),
      title: 'Do Laundry',
    })
  }
}


