package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Puesto;

public interface IPuestoDao {

    public Optional<Puesto[]> buscar(String codigo, String nombre, String empresa);

    public Optional<Puesto> findById(String codigo);

    public void guardar(Puesto puesto);

    public void actualizar(Puesto puesto);

    public void eliminarLogico(Puesto puesto);

    public boolean validarEnUso(String codigo);
}
