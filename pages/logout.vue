<script setup lang="ts">
const client = useSupabaseClient();

async function logout() {
    try {
        const { error } = await client.auth.signOut();
        if (error) {
            throw error;
        } else {
            await navigateTo("/login");
        }
    } catch (error) {}
}

logout();
</script>
