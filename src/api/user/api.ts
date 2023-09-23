import axios from "axios";
import { APIsResponse } from "..";
import { getTokenAuthorization } from "@/util";
import { omit } from "lodash";

export type UserApiResponse = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
  status: number;
  image: string;
  roles: string;
};

export type UserCreateApiInput = {
  name: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
  role: string;
  status: number;
  password: string;
  password_confirmation: string;
};

export type UserUpdateApiInput = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
  role: string;
};

export type RolesResponse = {
  id: number;
  name: number;
};

export type UserChangeStatusApiInput = {
  id: number;
  status: number;
};

export const userApi = {
  lists(
    props: { type: string; value: string } = {
      type: "",
      value: "",
    },
  ) {
    let res = "";

    if (props.type === "All") {
      res += "?search=" + props.value;
    }
    if (props.type === "Status") {
      res += "?status=" + props.value;
    }
    if (props.type === "Role") {
      res += "?role=" + props.value;
    }

    if (props.type === "page") {
      res += "?page=" + props.value;
    }

    return axios
      .get<APIsResponse<UserApiResponse>>(
        `users${props.value.length > 0 ? res : ""}`,
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },

  listById(id: number) {
    return axios
      .get<APIsResponse<UserApiResponse>>(
        "users/" + id,
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },

  getRoles() {
    return axios
      .get<APIsResponse<RolesResponse>>("roles")
      .then((data) => data.data);
  },

  create(input: UserCreateApiInput) {
    return axios
      .post<APIsResponse<UserApiResponse>>(
        "users",
        input,
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },

  update(input: UserUpdateApiInput) {
    return axios
      .put<APIsResponse<UserApiResponse>>(
        "users/" + input.id,
        omit(input, "id"),
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },

  delete(id: number) {
    return axios
      .delete<APIsResponse<UserApiResponse>>(
        "users/" + id,
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },

  changeStatus(input: UserChangeStatusApiInput) {
    return axios
      .put(
        `/users/${input.id}/status`,
        omit(input, "id"),
        getTokenAuthorization(),
      )
      .then((data) => data.data);
  },
};
