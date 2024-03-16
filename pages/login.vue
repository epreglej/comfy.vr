<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const client = useSupabaseClient();

const loginErrorMessage = ref("");

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, {
        message:
            "Must be 8 or more characters long, CURRENLTY MUST BE 5 BECAUSE DEVELOPMENT XDD",
    }),
});

type Schema = z.output<typeof schema>;

const state = reactive({
    email: undefined,
    password: undefined,
});

async function login(event: FormSubmitEvent<Schema>) {
    try {
        const { error } = await client.auth.signInWithPassword({
            email: event.data.email,
            password: event.data.password,
        });
        if (error) {
            loginErrorMessage.value = error.message;
            throw error;
        } else {
            await navigateTo("/admin");
        }
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <UForm :schema="schema" :state="state" @submit="login">
        <div
            class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-slate-950"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    class="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2
                    class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark: text-white"
                >
                    Sign in to your account
                </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <UFormGroup label="E-mail" name="email">
                    <UInput
                        color="primary"
                        variant="outline"
                        v-model="state.email"
                        placeholder="you@example.com"
                        icon="i-heroicons-envelope"
                    />
                </UFormGroup>
                <UFormGroup label="Password" name="password">
                    <UInput
                        color="primary"
                        variant="outline"
                        v-model="state.password"
                        icon="i-heroicons-lock-closed"
                        type="password"
                    />
                </UFormGroup>

                <p class="my-2 text-center text-sm text-red-500">
                    {{ loginErrorMessage }}
                </p>

                <div class="flex justify-center">
                    <UButton type="submit"> Submit </UButton>
                </div>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    {{ " " }}
                    <a
                        href="#"
                        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >Start a 14 day free trial</a
                    >
                </p>
            </div>
        </div>
    </UForm>
</template>
