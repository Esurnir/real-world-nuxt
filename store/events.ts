import { MutationTree, ActionTree } from "vuex";
import * as EventService from "~/services/EventService";
import { Event } from "~/types/event";

export const state = () => ({
  events: [] as Event[],
  event: {} as Event
});

export type EventState = ReturnType<typeof state>;

export const mutations: MutationTree<EventState> = {
  SET_EVENTS(state, events: Event[]) {
    state.events = events;
  },
  SET_EVENT(state, event: Event) {
    state.event = event;
  }
};

export const actions: ActionTree<EventState, unknown> = {
  async fetchEvents({ commit }) {
    const response = await EventService.getEvents();
    commit("SET_EVENTS", response.data);
  },
  async fetchEvent({ commit }, id: string) {
    const response = await EventService.getEvent(id);
    commit("SET_EVENT", response.data);
  }
};
