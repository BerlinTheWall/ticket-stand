import { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type HookApiResponseType<T> =
  | Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey">
  | undefined;
