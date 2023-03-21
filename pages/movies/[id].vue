<template>
  <div>{{ data }}</div>
</template>

<script setup>
  definePageMeta({
    middleware: "auth",
  });
  const {
    params: { id },
  } = useRoute();

  const { data, error } = await useAsyncData(
    `movies/${id}`,
    ({ $config }) => {
      return $fetch(
        `http://www.omdbapi.com?apiKey=${$config.public.omdbAPI_Key}&i=${id}`
      );
    },
    {
      transform: ({ Title, Plot, Error }) => {
        return { Plot, Title, Error };
      },
    }
  );

  if (error.value || data.value.Error) {
    if (error.value) showError({ statusCode: 500, statusMessage: error });
    else showError({ statusCode: 404, statusMessage: data.value.Error });
  }
</script>

<style lang="scss" scoped></style>
