<script setup lang="ts">
import { boolean, z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import type { Database } from "~/types/database.types";

const supabase = useSupabaseClient<Database>();

const schema = z.object({
    name: z.string().min(1, "Must be at least 1 character"),
    hasExplicitContent: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
    name: undefined,
    hasExplicitContent: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        const { data, error } = await supabase.from("applications").insert({
            name: state.name,
            hasExplicitContent: Boolean(state.hasExplicitContent),
            // krivo casta u Boolean tako da treba to popravit
        });

        if (error) {
            console.error("Error during insert:", error);
        } else {
            console.log("Record inserted successfully:", data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

const options = [
    { value: "true", label: "True" },
    { value: "false", label: "False" },
];
</script>

<template>
    <div class="">
        <UContainer :ui="{ constrained: 'max-w-2xl' }">
            <UForm
                :schema="schema"
                :state="state"
                class="space-y-4"
                @submit="onSubmit"
            >
                <UFormGroup label="Application name" name="name">
                    <UInput
                        color="primary"
                        variant="outline"
                        v-model="state.name"
                        icon="i-heroicons-document"
                    />
                </UFormGroup>

                <UFormGroup
                    label="Are next statements true or false for the
                reviewed application?"
                />
                <UFormGroup
                    label="Application has explicit content"
                    name="hasExplicitContent"
                >
                    <URadioGroup
                        v-model="state.hasExplicitContent"
                        :options="options"
                    />
                </UFormGroup>

                <UButton type="submit"> Submit </UButton>
            </UForm>
        </UContainer>
    </div>
</template>
