package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.OpcionRespuesta;

public interface IOpcionRespuestaDao {

    public ArrayList<OpcionRespuesta> buscarOpciones(String nombre);

    public OpcionRespuesta findById(UUID id);

    public void guardar(OpcionRespuesta opcionRespuesta);

    public void actualizar(OpcionRespuesta opcionRespuesta);

    public void eliminarLogico(UUID id);

    public boolean validarEnUso(UUID id);

}
