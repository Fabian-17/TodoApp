export const Todofilter = () => {
    return (
                <div className="row mb-3">
                <div className="col d-flex gap-1">
                  <button className="btn btn-sm btn-primary">All</button>
                  <button className="btn btn-sm btn-success">Active</button>
                  <button className="btn btn-sm btn-danger">Completed</button>
                  <button className="btn btn-sm btn-warning">Clear Completed</button>
                </div>
              </div>
    )
}