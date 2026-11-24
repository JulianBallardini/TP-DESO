package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.BloquePreguntas;

public interface IBloquePreguntasDao {
    public void guardar(BloquePreguntas bloquePreguntas);

    public Optional<BloquePreguntas> findById(Long id);

    public Optional<BloquePreguntas[]> recuperarBloquesPorCuestionario(Long idCuestionario);
}
