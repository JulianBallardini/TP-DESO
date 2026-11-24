package com.capitalhumano.dao;

import java.util.Optional;
import java.util.UUID;

import com.capitalhumano.modelo.OpcionRespuesta;

public interface IOpcionRespuestaDao {

    public Optional<OpcionRespuesta[]> buscarOpciones(String nombre);

    public Optional<OpcionRespuesta> findById(UUID id);

    public void guardar(OpcionRespuesta opcionRespuesta);

    public void actualizar(OpcionRespuesta opcionRespuesta);

    public void eliminarLogico(UUID id);

    public boolean validarEnUso(UUID id);

}
