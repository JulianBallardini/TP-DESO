package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Puesto;

public interface IPuestoDao {

    public ArrayList<Puesto> buscar(String codigo, String nombre, String empresa);

    public Puesto findById(UUID id);

    public void guardar(Puesto puesto);

    public void actualizar(Puesto puesto);

    public void eliminarLogico(Puesto puesto);

    public boolean validarEnUso(UUID id);
}
